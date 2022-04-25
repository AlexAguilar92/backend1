import IUser from "../../../repository/entities/interface/IUser";
import IUserUseCase from "../interface/IUserUserCase";

export default class UserUseCase implements IUserUseCase {
  create(user: IUser): IUser {
    throw new Error("Method not implemented.");
  }
  
}