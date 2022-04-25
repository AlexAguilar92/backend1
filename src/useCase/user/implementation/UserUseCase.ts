import IUser from "../../../repository/entities/interface/IUser";
import IUserUseCase from "../interface/IUserUseCase";
import { hash } from '../../../shared/utils/hasher/hasher'
import { IUserRepository } from "../../../repository";
import { UserRepository } from "../../../repository";

export default class UserUseCase implements IUserUseCase {
  private iUserRepository: IUserRepository;

  constructor() {
    this.iUserRepository = new UserRepository();
  }

  async create(user: IUser): Promise<IUser> {
    user.password = hash(user.password);
    const createdUser: IUser = await this.iUserRepository.create(user);
    return createdUser;
  }
}