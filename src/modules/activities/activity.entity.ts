import type { InferSelectModel } from "drizzle-orm";
import type { activities } from "../../db/schemas/activities";

export enum ActivityStatus {
  PENDING = "PENDING",
  FAIL = "FAIL",
  DELAYED = "DELAYED",
  COMPLETED = "COMPLETED",
}

export type ActivityEntity = InferSelectModel<typeof activities>;
