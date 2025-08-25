import Joi from 'joi';

export const userSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  role: Joi.string().valid('admin', 'user').required()
});

export const applicationSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  components: Joi.array().items(Joi.string()).required()
});
