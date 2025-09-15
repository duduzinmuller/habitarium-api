import type { FastifyReply, FastifyRequest } from "fastify";
import type { ActivityService } from "./activity.service";
import { assertValidUUID } from "../../utils/uuid-validator";

export class ActivityController {
  constructor(private readonly service: ActivityService) {}

  public async findById(req: FastifyRequest, reply: FastifyReply) {
    const { activityId } = req.params as { activityId: string };
    const userToken = req.user!;
    assertValidUUID(activityId, "activityId");
    const activity = await this.service.findById(activityId, userToken);
    return reply.status(200).send(activity);
  }

  public async complete(req: FastifyRequest, reply: FastifyReply) {
    const { activityId } = req.params as { activityId: string };
    const userToken = req.user!;
    assertValidUUID(activityId, "activityId");
    const activity = await this.service.complete(activityId, userToken);
    return reply.status(200).send(activity);
  }
}
