import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { UserFactory } from "../modules/users/user.factory";
import { zodValidator } from "../shared/guards/zod-validator";
import { userParamsValidator } from "../modules/users/user.dto";

export async function userRoutes(app: FastifyInstance) {
  app.get(
    "/:id",
    {
      preHandler: [zodValidator({ params: userParamsValidator })],
    },
    async (
      req: FastifyRequest<{ Params: { id: string } }>,
      reply: FastifyReply
    ) => {
      await UserFactory.findById(req, reply);
    }
  );
}
