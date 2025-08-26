const { User } = require('../models');

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;

    const createdUser = await User.create(body);
    if (!createdUser) {
      res.status(400).send('Something wrong');
    }
    res.status(201).send({ data: createdUser });
  } catch (error) {
    next(error);
  }
};

module.exports.getUsers = async (req, res, next) => {
  try {
    const foundUser = await User.findAll({
      attributes:{
        exclude: ['createdAt',"updatedAt"]
      }
    });
    if (!foundUser) {
      res.status(404).send('User not found');
    }
    res.status(200).send({ data: foundUser });
  } catch (error) {
    next(error);
  }
};
