import { pgTable, uuid, text, timestamp, pgEnum } from "drizzle-orm/pg-core";

export const providerEnum = pgEnum("provider", [
  "google",
  "facebook",
  "github",
  "local",
]);

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  provider: providerEnum("provider").default("local"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdateFn(() => new Date()),
});
