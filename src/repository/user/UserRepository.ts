import { Connection } from "typeorm";
import DBConnectionManager from "../../shared/helpers/DBConnectionManager";
import User from "../entities/User";

export default class UserRepository {
  private dBConnectionManager: DBConnectionManager = new DBConnectionManager();

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

  async create(user: Partial<User>): Promise<User> {

    await this.dBConnectionManager.connect();

    try {
      const createdUser: User = await this.dBConnectionManager.connection
      .getRepository(User).save(user);

      return createdUser;
    } catch (error) {
      throw error;
    } finally {
      // tslint:disable-next-line:no-console
      console.log("disconnected");
      await this.dBConnectionManager.disconnect();
    }
  }

  update() {
    return true;
  }

  delete() {
    return true;
  }
}