import { Connection } from "typeorm";

export default interface IDBConnectionManager {
  connection: Connection;

  connect(): Promise<Connection>;

  disconnect(): Promise<void>;
}