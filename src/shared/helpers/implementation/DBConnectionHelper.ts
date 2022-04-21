import { ConnectionManager } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

const connectionManager = new ConnectionManager();
// tslint:disable-next-line:no-console
console.log(__dirname)

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
    __dirname + '/../../../repository/entities/*.{js,ts}',
    // __dirname + "../../repository/entities/*.ts"

  ]
});

export default dbConnectionHelper;