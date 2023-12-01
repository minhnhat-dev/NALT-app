import { DataTypes } from "sequelize";
import { connectPostgres } from "../../database/Postgres";
import { User } from "../users/models";
const sequelize = connectPostgres.sequelize;

const Transaction = sequelize.define("Transaction", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true,
    validate: { isUUID: 4 },
  },
  type: {
    type: DataTypes.ENUM("income", "expense"),
    defaultValue: "income",
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      isDecimal: true,
    },
  },
  date: {
    type: DataTypes.DATE,
    validate: {
      isDate: true,
    },
  },
  description: {
    type: DataTypes.TEXT,
  },
});

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

Transaction.belongsTo(User, { as: "user" });
Transaction.belongsTo(Category, { as: "category" });

export { Transaction, Category };
