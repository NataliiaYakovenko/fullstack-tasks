const { Router } = require("express");
const taskController = require('../controllers/taskController')
const {validateTask} = require('../middlewares/validate')

const tasksRouter = Router();

tasksRouter
  .route('/')
  .post(validateTask,taskController.createTask)
  .get(taskController.getTasks)



module.exports =tasksRouter
