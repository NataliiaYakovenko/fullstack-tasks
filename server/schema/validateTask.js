const yup = require('yup');

const TASK_VALIDATE_SCHEMA = yup.object({
  body: yup.string().trim().required(),
  deadline: yup.date().min(new Date()),
  isDone: yup.boolean().required(),
});
