const { Task } = require('../models');

module.exports.createTask = async (req, res, next) => {
  try {
    const { body } = req;

    const createdUser = await Task.create(body);
    if (!createdUser) {
      res.status(400).send('Somrthing wrong');
    }
    res.status(201).send({ data: createdUser });
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
      res.status(404).send('Tasks not found');
    }
    res.status(200).send({ data: foundTasks });
  } catch (error) {
    next(error);
  }
};
