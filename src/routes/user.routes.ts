import type { FastifyInstance } from "fastify";
import { UserFactory } from "../modules/users/user.factory";
import { zodValidate } from "../shared/middleware/zod-validator";
import { CreateUser } from "../modules/users/user.dto";

export async function userRoutes(app: FastifyInstance) {
  app.get("/:id", { preHandler: [zodValidate(CreateUser, "body")] }, UserFactory.findById);
}
