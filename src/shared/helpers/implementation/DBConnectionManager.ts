import { Connection, DataSource } from "typeorm";
import dbConnectionHelper from "./DBConnectionHelper";

export default class DBConnectionManager {
  connection: DataSource;

  async connect(): Promise<DataSource> {
    // tslint:disable-next-line:no-console
    console.info("DBConnectionManager", "connect");
    try {
      if (!this.connection?.isInitialized ?? false) this.connection = await dbConnectionHelper.initialize();

      return this.connection;
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    try {
      await this.connection?.destroy();
    } catch (error) {
      throw error;
    }
  }
}
