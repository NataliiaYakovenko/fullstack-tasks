'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
     Task.belongsTo(models.User,{
      foreignKey: "userId"
     })
    }
  }
  Task.init(
    {
      body: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      deadline: {
        type: DataTypes.DATEONLY,
        validate: {
          isAfter: new Date().toISOString().split('T')[0],
        },
      },
      isDone: {
        type: DataTypes.BOOLEAN,
        field: 'is_done',
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'Task',
      tableName: 'tasks',
      underscored: true,
    }
  );
  return Task;
};
