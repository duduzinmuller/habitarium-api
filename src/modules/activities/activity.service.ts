import { DatabaseError, NotFoundError } from "../../utils/error-handler";
import { QuestDifficultyXp } from "../../utils/quests/quest-difficulty-xp";
import type { CharacterService } from "../characters/character.service";
import type { QuestService } from "../quests/quest.service";
import type { UserPublic } from "../users/user.entity";
import { ActivityStatus, type ActivityEntity } from "./activity.entity";
import type { ActivityRepository } from "./activity.repository";

export class ActivityService {
  constructor(
    private readonly repo: ActivityRepository,
    private readonly characterService: CharacterService,
    private readonly questService: QuestService
  ) {}

  public async findById(
    activityId: string,
    userToken: UserPublic
  ): Promise<ActivityEntity> {
    const character = await this.characterService.findByUserId(userToken.id);
    const activity = await this.repo.findById(activityId);

    if (!activity || character.id !== activity.characterId) {
      throw new NotFoundError("Activity not found", {
        details: { activityId },
      });
    }

    return activity;
  }

  public async create(
    data: { questId: string },
    userToken: UserPublic
  ): Promise<ActivityEntity> {
    const character = await this.characterService.findByUserId(userToken.id);
    const quest = await this.questService.findById(data.questId, userToken);

    const newActivity: ActivityEntity = {
      id: crypto.randomUUID(),
      characterId: character.id,
      questId: data.questId,
      status: ActivityStatus.PENDING,
      closedAt: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      xpEarned: QuestDifficultyXp[quest.difficulty],
    };

    const created = await this.repo.create(newActivity);
    if (!created) {
      throw new DatabaseError("Failed to persist activity create");
    }

    return created;
  }
}
