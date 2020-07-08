'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost/reserve_checker'
);

module.exports = {
  database: sequelize,
  Sequelize: Sequelize
};