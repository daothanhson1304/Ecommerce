const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelizeConnection');

const User = sequelize.define('user', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});

module.exports = User;
