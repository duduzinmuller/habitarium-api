import type { FastifyInstance } from "fastify";
import { UserFactory } from "../modules/users/user.factory";
import { zodMiddleware } from "../shared/middleware/zod-validator";
import {
  createUserSchema,
  userParamsValidator,
} from "../modules/users/user.dto";

export async function userRoutes(app: FastifyInstance) {
  app.post(
    "/",
    {
      preHandler: [
        zodMiddleware({ body: createUserSchema, params: userParamsValidator }),
      ],
    },
    UserFactory.findById
  );
}
