import {
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const questlineStatusEnum = pgEnum("questline_status", [
  "locked",
  "unlocked",
  "completed",
]);

export const questlines = pgTable("questlines", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  sequenceIndex: integer("sequence_index").notNull().unique(),
  status: questlineStatusEnum("status").default("locked").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
