import { Connection } from "typeorm";
import DBConnectionManager from "../../shared/helpers/DBConnectionManager";
import User from "../entities/User";

export default class UserRepository {
  private dBConnectionManager: DBConnectionManager = new DBConnectionManager();

  async findById(id: string) {
    await this.dBConnectionManager.connect();
    // tslint:disable-next-line:no-console
    // console.log(this.dBConnectionManager.connection);
    try {
      const query = this.dBConnectionManager.connection.getRepository(User).createQueryBuilder("user")
      .where("user.id = :id", { id });

      const user: User = await query.getOne();

      return user;
      // tslint:disable-next-line:no-console
      // console.log(process.env.DATABASE_URL);
      // return {
      //   id: "wtorres",
      //   name: "William Jesus Torres Flota",
      //   email: "wtorres@palaceresorts.com",
      //   password: "P4ssw0rd",
      //   status: true
      // }
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error)
      throw error;
    } finally {
      // tslint:disable-next-line:no-console
      await this.dBConnectionManager.disconnect();
    }

  }

  find() {
    return [{
      id:"wtorres",
      name:"William Jesus Torres Flota",
      email:"wtorres@palaceresorts.com",
      password:"P4ssw0rd",
      status:true
    },]
  }

  async create(user: Partial<User>) {

    await this.dBConnectionManager.connect();

    try {
      const createdUser: User = await this.dBConnectionManager.connection.getRepository(User).save(user);
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