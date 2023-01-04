
import Joi from "joi";

export const createStudentSchema = Joi.object({
  regNumber: Joi.number()
    .min(1)
    .max(99)
    .required(),

  name: Joi.string()
    .min(4)
    .max(30)
    .required(),

  grade: Joi.string()
    .min(1)
    .max(1)
    .required()
    .pattern(new RegExp('^[a-zA-Z]$')),

  section: Joi.string()
    .min(1)
    .max(1)
    .required()
    .pattern(new RegExp('^[a-zA-Z]$'))
})



export const updateStudentSchema = Joi.object({

  regNumber: Joi.number()
    .min(1)
    .max(99),

  name: Joi.string()
    .min(4)
    .max(30),

  grade: Joi.string()
    .min(1)
    .max(1)
    .pattern(new RegExp('^[a-zA-Z]$')),

  section: Joi.string()
    .min(1)
    .max(1)
    .pattern(new RegExp('^[a-zA-Z]$'))
})