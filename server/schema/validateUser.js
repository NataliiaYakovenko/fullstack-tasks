const yup = require("yup");

const USER_VALIDATE_SCHEMA = yup.object({
  firstNmae: yup
    .string()
    .trim()
    .required()
    .min(2)
    .max(64)
    .matches(/^[A-Z][a-z]+$/, "The first letter must be capital"),
  lastName: yup
    .string()
    .trim()
    .required()
    .min(2)
    .max(64)
    .matches(/^[A-Z][a-z]+$/, "The first letter must be capital"),
  email: yup.email().required(),
  birthday: yup.date().max(new Date()).required(),
  numberPhone: yup
    .string()
    .required()
    .max(13)
    .matches(/^\+380\d{9}$/),
  gender:yup.string().required(),
});

module.exports = USER_VALIDATE_SCHEMA;
