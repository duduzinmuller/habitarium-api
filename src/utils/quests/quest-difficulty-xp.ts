import { QuestDifficulty } from "../../modules/quests/quest.entity";

export const QuestDifficultyXp: Record<QuestDifficulty, number> = {
  [QuestDifficulty.EASY]: 10,
  [QuestDifficulty.MEDIUM]: 25,
  [QuestDifficulty.HARD]: 50,
  [QuestDifficulty.LEGENDARY]: 100,
};
