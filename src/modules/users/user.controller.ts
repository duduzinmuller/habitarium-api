import type { FastifyRequest, FastifyReply } from "fastify";

export class UserController {
  constructor() {}

  async findById(
    req: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    console.log(req);
    return reply.code(200).send({ mensagem: "deu certo", id: req.params.id });
  }
}
