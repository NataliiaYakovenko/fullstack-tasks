const USER_VALIDATE_SCHEMA = require('../schema/validateUser');
const TASK_VALIDATE_SCHEMA = require('../schema/validateTask');

module.exports.validateUser = async (req, res, next) => {
  try {
    const { body } = req;

    const validatedUser = await USER_VALIDATE_SCHEMA(body);
    req.body = validatedUser;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports.validateTask = async (req, res, next) => {
  try {
    const { body } = req;

    const validatedTask = await TASK_VALIDATE_SCHEMA(body);
    req.body = validatedTask;
    next();
  } catch (error) {
    next(error);
  }
};
