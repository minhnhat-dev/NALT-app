import { DataTypes } from "sequelize";
import { connectPostgres } from "../../database/Postgres";
import { Transaction } from "../transactions/models";
const sequelize = connectPostgres.sequelize;

const Category = sequelize.define("Category", {
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
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM("income", "expense"),
    defaultValue: "income",
    allowNull: false,
  },
});

// Transaction.belongsTo(Category, { as: "category" });

export { Category };
