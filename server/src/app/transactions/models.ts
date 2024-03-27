import { DataTypes } from "sequelize";
import { connectPostgres } from "../../database/Postgres";
import { User } from "../users/models";
import { Category } from "../categories/models";
const sequelize = connectPostgres.sequelize;

const Transaction = sequelize.define("transaction", {
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
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
      isDecimal: true,
    },
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDate: true,
    },
  },
  description: {
    type: DataTypes.TEXT,
  },
});

User.hasMany(Transaction);
Transaction.belongsTo(User);

Category.hasMany(Transaction);
Transaction.belongsTo(Category);

// Transaction.sync({ force: true });

export { Transaction };
