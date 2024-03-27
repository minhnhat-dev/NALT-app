import { DataTypes } from "sequelize";
import { connectPostgres } from "../../database/Postgres";

const sequelize = connectPostgres.sequelize;

const User = sequelize.define("user", {
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
  role: {
    type: DataTypes.ENUM("admin", "guest", "restrict"),
    defaultValue: "guest",
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
    validate: {
      isUrl: true,
    },
  },
  money: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    defaultValue: 0,
    validate: {
      isNumeric: true,
    },
  },
});

// User.sync({ force: true });

export { User };
