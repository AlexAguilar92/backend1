import { DataSource } from "typeorm";

export default interface IDBConnectionManager {
  connection: DataSource;

  connect(): Promise<DataSource>;

  disconnect(): Promise<void>;
}