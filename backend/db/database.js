const Sequelize = require('sequelize');

const db = new Sequelize(`postgres://localhost:5432/teaDB`, {
  logging: false,
});

module.exports = db;
