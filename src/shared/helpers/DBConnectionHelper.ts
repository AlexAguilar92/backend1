import { ConnectionManager } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

const connectionManager = new ConnectionManager();

const dbConnectionHelper = connectionManager.create({
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "940220",
  database: "todoapp",
  type: "postgres",
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
  entities: [
    "../../repository/entities/*.ts"
  ]
});

export default dbConnectionHelper;