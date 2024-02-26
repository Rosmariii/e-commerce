import "reflect-metadata";
import { DataSource } from "typeorm";
import { Producto } from "./entity/Producto";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "rosmari92",
  database: "e-commerce",
  synchronize: true,
  logging: false,
  entities: [Producto],
  migrations: [],
  subscribers: [],
});
