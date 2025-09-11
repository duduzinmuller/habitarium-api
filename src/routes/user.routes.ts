import type { FastifyInstance } from "fastify";
import { makeUserController } from "../modules/users/user.factory";
import { zodValidator } from "../shared/guards/zod-validator";
import { userParamsSchema } from "../modules/users/user.entity";

const userController = makeUserController();

export async function userRoutes(app: FastifyInstance) {
  app.get<{
    Params: { id: string };
  }>(
    "/:id",
    { preHandler: [zodValidator({ params: userParamsSchema })] },
    async (req, reply) => {
      await userController.findById(req, reply);
    }
  );
}
