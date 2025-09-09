import type { FastifyReply, FastifyRequest, preHandlerHookHandler } from "fastify";
import type { ZodTypeAny } from "zod";

type Source = "body" | "params" | "query";

function toErrorResponse(e: any) {
  if (!e?.issues) return { message: "Invalid request" };
  return {
    message: "Validation error",
    errors: e.issues.map((i: any) => ({
      path: i.path.join("."),
      code: i.code,
      message: i.message,
    })),
  };
}

export function zodValidate<T extends ZodTypeAny>(
  schema: T,
  source: Source = "body"
): preHandlerHookHandler {
  return async (req: FastifyRequest, reply: FastifyReply) => {
    const data = (req as any)[source];
    const result = schema.safeParse(data);
    if (!result.success) {
      return reply.status(422).send(toErrorResponse(result.error));
    }
    (req as any)[source] = result.data;
  };
}
