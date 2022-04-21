import { nextTick } from "process";
import { SelectQueryBuilder } from "typeorm";
import DBConnectionManager from "../../../shared/helpers/implementation/DBConnectionManager";
import IDBConnectionManager from "../../../shared/helpers/interface/IDBConnectionManager";
import IUser from "../../entities/interface/IUser";
import User from "../../entities/User";
import IUserRepository from "../interface/IUserRepository";

export default class UserRepository implements IUserRepository {
  private iDBConnectionManager: IDBConnectionManager;

  async findById(id: string): Promise<User> {
    this.iDBConnectionManager = new DBConnectionManager();
    await this.iDBConnectionManager.connect();
    // tslint:disable-next-line:no-console
    // console.log(this.dBConnectionManager.connection);
    try {
      const query: SelectQueryBuilder<IUser> = this.iDBConnectionManager.connection
      .getRepository(User).createQueryBuilder("user")
      .where("user.id = :id", { id });

      const user: IUser = await query.getOne();

      return user;
      // tslint:disable-next-line:no-console
      // console.log(process.env.DATABASE_URL);
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.error("UserRepository.findById", error)
      throw error;
    } finally {
      // tslint:disable-next-line:no-console
      await this.iDBConnectionManager.disconnect();
    }

  }

  async find(): Promise<User[]> {
    this.iDBConnectionManager = new DBConnectionManager();
    await this.iDBConnectionManager.connect();

    try {
      const query: SelectQueryBuilder<IUser> = this.iDBConnectionManager.connection
      .getRepository(User).createQueryBuilder("user");

      const users: IUser[] = await query.getMany();

      return users;
    } catch (error) {
      throw error;
    } finally {
      await this.iDBConnectionManager.disconnect()
    }
  }

  findByName(name: string): Promise<User> {
    throw new Error("Method not implemented.");
  }

  async create(user: Partial<User>): Promise<User> {
    this.iDBConnectionManager = new DBConnectionManager();
    await this.iDBConnectionManager.connect();

    try {
      const createdUser: User = await this.iDBConnectionManager.connection
      .getRepository(User).save(user);
      // tslint:disable-next-line:no-console
      console.log("UserRepository.create", createdUser)
      return createdUser;
    } catch (error) {
      throw error;
    } finally {
      // tslint:disable-next-line:no-console
      console.log("disconnected");
      await this.iDBConnectionManager.disconnect();
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