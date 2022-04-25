import IUser from "../../../repository/entities/interface/IUser";
import { IUserRepository, UserRepository } from "../../../repository";
import IUserAdapter from "../interface/IUserAdapter";
import IUserDTO from "../../DTO/IUserDTO";
import IMapperService from "../../../shared/utils/mapper/interface/IMapperService";
import UserMapperService from "./UserMapperService";

export default class UserAdapter implements IUserAdapter {
  private iUserRepository: IUserRepository;
  private iUserMapperService: IMapperService<IUser, IUserDTO>;

  constructor() {
    this.iUserRepository = new UserRepository();
    this.iUserMapperService = new UserMapperService();
  }

  async find(): Promise<IUserDTO[]> {
    const users: IUser [] = await this.iUserRepository.find();
    const usersDTO: IUserDTO [] = this.iUserMapperService.transform(users);
    return usersDTO;
  }

  async findById(id: string): Promise<IUserDTO> {
    const user: IUser = await this.iUserRepository.findById(id);
    const userDTO: IUserDTO = this.iUserMapperService.transform(user);
    return userDTO;
  }
}