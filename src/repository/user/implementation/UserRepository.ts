import DBConnectionManager from "../../../shared/helpers/DBConnectionManager";
import User from "../../entities/User";
import IUserRepository from "../interface/IUserRepository";

export default class UserRepository implements IUserRepository {
  private dBConnectionManager: DBConnectionManager;

  constructor() {
    this.dBConnectionManager = new DBConnectionManager();
  }

  async findById(id: string): Promise<User> {
    await this.dBConnectionManager.connect();
    // tslint:disable-next-line:no-console
    // console.log(this.dBConnectionManager.connection);
    try {
      const query = this.dBConnectionManager.connection
      .getRepository(User).createQueryBuilder("user")
      .where("user.id = :id", { id });

      const user: User = await query.getOne();

      return user;
      // tslint:disable-next-line:no-console
      // console.log(process.env.DATABASE_URL);
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error)
      throw error;
    } finally {
      // tslint:disable-next-line:no-console
      await this.dBConnectionManager.disconnect();
    }

  }

  async find(): Promise<User[]> {
    await this.dBConnectionManager.connect();

    try {
      const query = this.dBConnectionManager.connection
      .getRepository(User).createQueryBuilder("user");

      const users: User[] = await query.getMany();

      return users;
    } catch (error) {
      throw error;
    } finally {
      await this.dBConnectionManager.disconnect()
    }
  }

  findByName(name: string): Promise<User> {
    throw new Error("Method not implemented.");
  }

  async create(user: Partial<User>): Promise<User> {

    await this.dBConnectionManager.connect();

    try {
      const createdUser: User = await this.dBConnectionManager.connection
      .getRepository(User).save(user);
      // tslint:disable-next-line:no-console
      console.log("UserRepository.create", createdUser)
      return createdUser;
    } catch (error) {
      throw error;
    } finally {
      // tslint:disable-next-line:no-console
      console.log("disconnected");
      await this.dBConnectionManager.disconnect();
    }
  }

  async update(user: User): Promise<User> {
    throw new Error("Not implemented yet.")
    // return true;
  }

  async delete(id: string): Promise<void> {
    throw new Error("Not implemented yet.")
    // return true;
  }
}