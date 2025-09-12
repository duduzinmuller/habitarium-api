import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { quests } from "./quests";
import { characters } from "./characters";

export const activityQuests = pgTable("activity_quests", {
  id: uuid("id").defaultRandom().primaryKey(),
  questId: uuid("quest_id")
    .notNull()
    .references(() => quests.id, { onDelete: "cascade" }),
  characterId: uuid("character_id")
    .notNull()
    .references(() => characters.id, { onDelete: "cascade" }),
  status: text("status").notNull(),
  closedAt: timestamp("closed_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  xpEarned: integer("xp_earned").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdateFn(() => new Date()),
});
