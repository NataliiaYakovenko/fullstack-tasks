const User = require('../models/User');

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
