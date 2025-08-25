/* Validation rules */

import Joi from 'joi';

export const userSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    email: Joi.string().email().required(),
    role: Joi.string().valid('User', 'Admin').required()
});

export const applicationSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    description: Joi.string().max(500),
    components: Joi.array().items(Joi.string())
});