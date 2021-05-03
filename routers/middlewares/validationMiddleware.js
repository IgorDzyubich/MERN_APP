const Joi = require('joi');

module.exports.validateLogin = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
        .email(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')),

  });

  await schema.validateAsync(req.body);
  next();
};

module.exports.validateRegister = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
        .email(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')),

  });

  await schema.validateAsync(req.body);
  next();
};

module.exports.validateNotifications = async (req, res, next) => {
  const schema = Joi.object({
    created_by: Joi.string(),
    assigned_to: Joi.string(),
    statusNew: Joi.boolean(),
    message: Joi.string(),
    created_date: Joi.string(),
  });

  await schema.validateAsync(req.body);
  next();
};

module.exports.validateMessages = async (req, res, next) => {
  const schema = Joi.object({
    created_by: Joi.string(),
    assigned_to: Joi.string(),
    statusNew: Joi.boolean(),
    message: Joi.string(),
    created_date: Joi.string(),
  });

  await schema.validateAsync(req.body);
  next();
};
