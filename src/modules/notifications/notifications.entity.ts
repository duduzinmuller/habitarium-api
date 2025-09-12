import type { InferSelectModel } from "drizzle-orm";
import z from "zod";
import type { notifications } from "../../db/schemas/notifications";

export const updateNotificationSchema = z.object({
  id: z.uuid("Invalid id"),
  character: z.uuid("Invalid characterId").optional(),
  title: z.string("Title must be a string").optional(),
  description: z.string("Description must be a string").optional(),
  type: z.string("Type must be a string").optional(),
  isRead: z.boolean("isRead must be a boolean"),
  createdAt: z.coerce.date("Invalid createdAt").optional(),
});

export type UpdateNotificationInput = z.infer<typeof updateNotificationSchema>;

export type NotificationEntity = InferSelectModel<typeof notifications>;
