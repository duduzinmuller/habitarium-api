import type { FastifyRequest, FastifyReply } from "fastify";

export class UserController {
  constructor() {}

  async findById(req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    return reply.code(200).send({mensagem: "deu certo", id: req.params.id})
  }
}