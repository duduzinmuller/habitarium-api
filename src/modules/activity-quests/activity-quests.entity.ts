import type { InferSelectModel } from "drizzle-orm";
import type { activityQuests } from "../../db/schemas/activity-quests";

export type ActivityQuestsEntity = InferSelectModel<typeof activityQuests>;
