const Sequelize = require('sequelize');
const db = require('../database');

const Tea = db.define('tea', {
  name:{
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  flavorProfile: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 10
    },
    defaultValue: 5
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://dazedimg-dazedgroup.netdna-ssl.com/800/azure/dazed-prod/1170/8/1178438.jpg'
  },
  seller: {
    type: Sequelize.STRING
  },
  link: {
    type: Sequelize.STRING
  }
})

module.exports = Tea;
