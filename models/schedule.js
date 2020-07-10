'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Schedule = loader.database.define(
  'schedules',
  {
    date: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false
    },
    reserve_9_00: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    reserve_9_30: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    reserve_10_00: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    reserve_10_30: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    reserve_11_00: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    reserve_11_30: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    reserve_12_00: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    reserve_16_00: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    reserve_16_30: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    reserve_17_00: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    reserve_17_30: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    reserve_18_00: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    reserve_18_30: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    reserve_19_00: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    reserve_19_30: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    reserve_20_00: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = Schedule;