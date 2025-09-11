import type { FastifyRequest, FastifyReply } from "fastify";
import type { UserService } from "./user.service";

export class UserController {
  constructor(private readonly service: UserService) {}

  public async findById(
    req: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    const user = await this.service.findById(req.params.id);
    return reply.code(200).send(user);
  }
}
