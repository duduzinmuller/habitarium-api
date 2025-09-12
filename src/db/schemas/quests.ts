import { boolean, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { characters } from "./characters";

export const quests = pgTable("quests", {
  id: uuid("id").defaultRandom().primaryKey(),
  characterId: uuid("character_id")
    .notNull()
    .references(() => characters.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  description: text("description").notNull(),
  type: text("type").notNull(),
  difficulty: text("difficulty").notNull(),
  dueDate: timestamp("due_date"),
  isPaused: boolean("is_paused").notNull().default(false),
  frequency: text("frequency"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdateFn(() => new Date()),
});
