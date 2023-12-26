import { DataTypes } from "sequelize";
import { connectPostgres } from "../../database/Postgres";
import { User } from "../users/models";
const sequelize = connectPostgres.sequelize;

const Category = sequelize.define("category", {
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
  image: {
    type: DataTypes.TEXT,
    validate: {
      isUrl: true,
    },
  },
});

User.hasMany(Category);
Category.belongsTo(User);

// Category.sync({ force: true });

export { Category };
