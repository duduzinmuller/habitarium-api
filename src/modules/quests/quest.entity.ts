import type { InferSelectModel } from "drizzle-orm";
import z from "zod";
import type { quests } from "../../db/schemas/quests";

export const createQuestSchema = z
  .object({
    name: z.string("Name is required"),
    description: z.string("Description must be a string").optional(),
    type: z.string("Type is required"),
    difficulty: z.string("Difficulty is required"),
    dueDate: z.coerce.date("Invalid dueDate").optional(),
    frequency: z.string("Frequency must be a string").optional(),
  })
  .strict();

export type CreateQuestInput = z.infer<typeof createQuestSchema>;

export const updateQuestSchema = z
  .object({
    id: z.uuid("Invalid id"),
    name: z.string("Name must be a string").optional(),
    description: z.string("Description must be a string").optional(),
    difficulty: z.string("Difficulty must be a string").optional(),
    isPaused: z.boolean("isPaused must be a boolean").optional(),
    dueDate: z.coerce.date("Invalid dueDate").optional(),
    frequency: z.string("Frequency must be a string").optional(),
  })
  .strict();

export type UpdateQuestInput = z.infer<typeof updateQuestSchema>;

export type QuestEntity = InferSelectModel<typeof quests>;
