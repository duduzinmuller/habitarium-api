import z from "zod";

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

export interface NotificationEntity {
  id: string;
  characterId: string;
  title: string;
  description: string;
  type: string;
  isRead: boolean;
  createdAt: Date;
}
