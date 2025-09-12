export interface ActivityQuestsEntity {
  id: string;
  questId: string;
  characterId: string;
  status: string;
  completionDate: Date;
  xpEarned: number;
}
