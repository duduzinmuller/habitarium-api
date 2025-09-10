import type { FastifyInstance } from "fastify";
import { UserFactory } from "../modules/users/user.factory";
import { zodMiddleware } from "../shared/middleware/zod-validator";
import { createUserSchema } from "../modules/users/user.dto";

export async function userRoutes(app: FastifyInstance) {
  app.post(
    "/:id",
    { preHandler: [zodMiddleware({ body: createUserSchema })] },
    UserFactory.findById
  );
}
