'use strict';
const Sequelize = require('sequelize');
//DBローカル環境設定
/*
const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost/reserve_checker'
);*/
//DB heroku設定
const sequelize = new Sequelize(
  process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost/reserve_checker'
 );

module.exports = {
  database: sequelize,
  Sequelize: Sequelize
};