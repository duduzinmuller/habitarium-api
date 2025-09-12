import type { FastifyInstance } from "fastify";
import { makeUserController } from "../modules/users/user.factory";
import { zodValidator } from "../shared/guards/zod-validator";
import {
  createUserSchema,
  updateUserSchema,
  userParamsSchema,
} from "../modules/users/user.entity";

const userController = makeUserController();

export async function userRoutes(app: FastifyInstance) {
  app.get(
    "/:userId",
    { preHandler: [zodValidator({ params: userParamsSchema })] },
    async (req, reply) => {
      await userController.findById(req, reply);
    }
  );

  app.post(
    "/",
    { preHandler: [zodValidator({ body: createUserSchema })] },
    async (req, reply) => {
      await userController.register(req, reply);
    }
  );

  app.put(
    "/:userId",
    {
      preHandler: [
        zodValidator({ body: updateUserSchema, params: userParamsSchema }),
      ],
    },
    async (req, reply) => {
      await userController.update(req, reply);
    }
  );
}
