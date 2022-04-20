import { Connection } from "typeorm";
import dbConnectionHelper from "./DBConnectionHelper";

export default class DBConnectionManager {
  connection: Connection;

  async connect(): Promise<Connection> {
    // tslint:disable-next-line:no-console
    // console.log("DBConnectionManager", process.env.DATABASE_URL);
    try {
      if (!this.connection) this.connection = await dbConnectionHelper.connect();

      return this.connection;
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    try {
      await this.connection?.close();
    } catch (error) {
      throw error;
    }
  }
}
