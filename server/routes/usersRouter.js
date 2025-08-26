const { Router } = require('express');
const userController = require('../controllers/userController');
const {validateUser}=require('../middlewares/validate')

const usersRouter = Router();

usersRouter
    .route('/')
     .post(validateUser,userController.createUser)
     .get(userController.getUsers)

module.exports = usersRouter;
