import { relations } from "drizzle-orm";
import { characters } from "./characters";
import { notifications } from "./notifications";
import { quests } from "./quests";
import { users } from "./users";
import { questsActivity } from "./quest-activity";

export const usersRelations = relations(users, ({ one }) => ({
  character: one(characters, {
    fields: [users.id],
    references: [characters.userId],
  }),
}));

export const charactersRelations = relations(characters, ({ one, many }) => ({
  user: one(users, {
    fields: [characters.userId],
    references: [users.id],
  }),
  quests: many(quests),
  questsActivity: many(questsActivity),
  notifications: many(notifications),
}));

export const questsRelations = relations(quests, ({ one, many }) => ({
  character: one(characters, {
    fields: [quests.characterId],
    references: [characters.id],
  }),
  questsActivity: many(questsActivity),
}));

export const questsActivityRelations = relations(questsActivity, ({ one }) => ({
  quest: one(quests, {
    fields: [questsActivity.questId],
    references: [quests.id],
  }),
  character: one(characters, {
    fields: [questsActivity.characterId],
    references: [characters.id],
  }),
}));

export const notificationsRelations = relations(notifications, ({ one }) => ({
  character: one(characters, {
    fields: [notifications.characterId],
    references: [characters.id],
  }),
}));
