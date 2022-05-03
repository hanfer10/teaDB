const Sequelize = require('sequelize');
const db = require('../database');

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    defaultValue: 'password',
  },
  role: {
    type: Sequelize.ENUM('admin', 'user'),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    defaultValue: 'user',
  }
})

module.exports = User;
