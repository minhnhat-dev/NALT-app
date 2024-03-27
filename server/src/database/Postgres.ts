import { Sequelize } from "sequelize";
import env from "../config/env";

class Connect {
  private static instance: Connect;
  public sequelize: Sequelize;

  private constructor() {
    this.sequelize = new Sequelize(env.databaseUrl, {
      dialect: "postgres",
      dialectOptions: { ssl: true },
    });

    try {
      this.sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  public static get Instance() {
    return this.instance || (this.instance = new this());
  }
}

export const connectPostgres = Connect.Instance;
