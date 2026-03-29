const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const USER = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type : DataTypes.ENUM('guest', 'author','admin'),
    defaultValue : 'guest',
    allowNull:false
  },
});

module.exports = USER
