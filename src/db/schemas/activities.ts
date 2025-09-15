import { integer, pgEnum, pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
import { quests } from "./quests";
import { characters } from "./characters";

export const activityStatusEnum = pgEnum("activity_status", [
  "PENDING",
  "FAIL",
  "DELAYED",
  "COMPLETED",
]);

export const activities = pgTable("activities", {
  id: uuid("id").defaultRandom().primaryKey(),
  questId: uuid("quest_id")
    .notNull()
    .references(() => quests.id, { onDelete: "cascade" }),
  characterId: uuid("character_id")
    .notNull()
    .references(() => characters.id, { onDelete: "cascade" }),
  status: activityStatusEnum("status").notNull(),
  closedAt: timestamp("closed_at"),
  xpEarned: integer("xp_earned").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdateFn(() => new Date()),
});
