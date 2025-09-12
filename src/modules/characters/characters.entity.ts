export interface CharacterEntity {
  id: string;
  userId: string;
  profilePictureUrl: string;
  level: number;
  totalXp: number;
  currentStreak: number;
  longestStreak: number;
  rankingPosition: number | null;
  lastQuestCompletedAt: Date | null;
  badges: string[];
  createdAt: Date;
  updatedAt: Date;
}
