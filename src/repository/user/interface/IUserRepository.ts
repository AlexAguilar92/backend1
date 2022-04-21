import IRead from "../../commons/interface/IRead";
import IWrite from "../../commons/interface/IWrite";
import User from "../../entities/User";

export default interface IUserRepository extends IRead<User>, IWrite<User> {
  findByName(name: string): Promise<User>
}