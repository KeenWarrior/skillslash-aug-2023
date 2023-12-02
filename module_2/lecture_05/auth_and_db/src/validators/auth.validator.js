const Joi = require("joi");

function registerValidator(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).options({ abortEarly: false });

  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details,
    });
  }

  next();
}

function loginValidator(req, res, next) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).options({ abortEarly: false });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details,
    });
  }

  next();
}

module.exports = {
  registerValidator,
  loginValidator
};
