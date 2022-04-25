import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";
import Joi from "joi";

interface UserGetByIdSchema extends ValidatedRequestSchema {
  [ContainerTypes.Params]: {
    id: string
  }
}

const paramsSchema = Joi.object({
  id: Joi.string().uuid().optional()
});

export {
  UserGetByIdSchema,
  paramsSchema
};