const yup = require('yup');

const TASK_VALIDATE_SCHEMA = yup.object({
  body: yup.string().trim().required(),
  deadline: yup.date().min(new Date(),'date must be more current day'),
  isDone: yup.boolean().required(),
});

module.exports=TASK_VALIDATE_SCHEMA