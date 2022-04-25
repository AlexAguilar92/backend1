import IUser from "../../../repository/entities/interface/IUser";

export default interface IUserUseCase {
  create(user: IUser): Promise<IUser>;
}