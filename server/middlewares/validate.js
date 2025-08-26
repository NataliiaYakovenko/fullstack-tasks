const USER_VALIDATE_SCHEMA = require('../schema/validateUser')

module.exports.validateUser = async (req, res, next) => {
  try {
    const { body } = req;

    const validatedUser = await USER_VALIDATE_SCHEMA(body);
    req.body;
    next()
  } catch (error) {
    next(error);
  }
};
