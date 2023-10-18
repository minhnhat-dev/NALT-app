import { Sequelize } from "sequelize";

async function connectDatabase() {
  const sequelize = new Sequelize(process.env.URL_POSTGRES as string, {
    dialect: "postgres",
    dialectOptions: {},
  });

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

export default { connectDatabase };
