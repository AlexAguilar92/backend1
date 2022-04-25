import IUser from "../../../repository/entities/interface/IUser";
import MapperService from "../../../shared/utils/mapper/abstraction/MapperService";
import IUserDTO from "../../DTO/IUserDTO";

export default class UserMapperService extends MapperService<IUser, IUserDTO> {
  protected map(entity: IUser): IUserDTO {
    
    return {
      id: entity.id,
      name: entity.name,
      email: entity.email,
      status: entity.status
    }
  }

}