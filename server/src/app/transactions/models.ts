import { DataTypes } from "sequelize";
import { connectPostgres } from "../../database/Postgres";
const sequelize = connectPostgres.sequelize;

export default sequelize.define(
  "Transaction",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
      validate: { isUUID: 4 },
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Users",
  }
);
