const { where } = require('sequelize');
const { Task } = require('../models');

module.exports.createTask = async (req, res, next) => {
  try {
    const { body } = req;

    const createdUser = await Task.create(body);
    if (!createdUser) {
      return res.status(400).send('Somrthing wrong');
    }
    return res.status(201).send({ data: createdUser });
  } catch (error) {
    next(error);
  }
};

module.exports.getTasks = async (req, res, next) => {
  try {
    const foundTasks = await Task.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    if (!foundTasks) {
      return res.status(404).send('Tasks not found');
    }
    return res.status(200).send({ data: foundTasks });
  } catch (error) {
    next(error);
  }
};

module.exports.updateTaskById = async (req, res, next) => {
  try {
    const {
      body,
      params: { id },
    } = req;

    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).send('Task not found');
    }

    await task.update(body);
    return res.status(200).send({ data: task });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const rowsCount = await Task.destroy({ where: { id: id } });

    if (rowsCount > 0) {
      return res.status(200).send('Saccessful delet');
    }
    return res.status(404).send('Task not found');
  } catch (error) {
    next(error);
  }
};
