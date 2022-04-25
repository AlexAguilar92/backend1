import IUserDTO from "../../DTO/IUserDTO";

export default interface IUserAdapter {
  find(): Promise<IUserDTO []>;

  findById(id: string): Promise<IUserDTO>
}