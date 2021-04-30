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

module.exports.validateUser = async (req, res, next) => {
  const schema = Joi.object({
    _id: Joi.string(),
    id: Joi.number(),
    first_name: Joi.string(),
    second_name: Joi.string(),
    last_name: Joi.string(),
    email: Joi.string()
        .email(),
    password: Joi.string(),
    gender: Joi.string(),
    ip_address: Joi.string(),
    phone: Joi.string(),
    region: Joi.string(),
    address: Joi.string(),
    department: Joi.string(),
    role: Joi.string(),
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

// module.exports.validateEmail = async (req, res, next) => {
//   const schema = Joi.object({
//     email: Joi.string()
//               .email(),
//   });

//   await schema.validateAsync(req.body);
//   next();
// };

// "id":1,
// "first_name":"Ximenez",
// "second_name":"Gladi",
// "last_name":"Calcut",
// "email":"gcalcut0@cnet.com",
// "password":"9RV8YkdKFPQc",
// "gender":"Bigender",
// "ip_address":"170.193.201.242",
// "phone":"967-303-0032",
// "region":"Verkhnyaya Toyma",
// "address":"417 Kensington Way",
// "department":"Business Development",
// "role":"Mrs"

// module.exports.validateTruck = async (req, res, next) => {
//   const schema = Joi.object({
//     _id: Joi.string(),
//     created_by: Joi.string(),
//     assigned_to: Joi.string(),
//     type: Joi.string().required(),
//     status: Joi.string(),
//     createdDate: Joi.string(),
//   });

//   await schema.validateAsync(req.body);
//   next();
// };

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
