import type { InferSelectModel } from "drizzle-orm";
import type { activities } from "../../db/schemas/activities";

export type ActivitiesEntity = InferSelectModel<typeof activities>;
