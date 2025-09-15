import {
  DatabaseError,
  ForbiddenError,
  NotFoundError,
} from "../../utils/error-handler";
import type { CharacterService } from "../characters/character.service";
import type { UserPublic } from "../users/user.entity";
import type {
  CreateNotificationInput,
  NotificationEntity,
  UpdateNotificationInput,
} from "./notification.entity";
import type { NotificationRepository } from "./notification.repository";

export class NotificationService {
  constructor(
    private readonly repo: NotificationRepository,
    private readonly characterService: CharacterService
  ) {}

  public async findAll(userToken: UserPublic): Promise<NotificationEntity[]> {
    const character = await this.characterService.findByUserId(userToken.id);
    const notifications = await this.repo.findAll(character.id);
    return notifications;
  }

  public async findById(
    notificationId: string,
    userToken: UserPublic
  ): Promise<NotificationEntity> {
    const character = await this.characterService.findByUserId(userToken.id);
    const notification = await this.repo.findById(notificationId);
    if (!notification) {
      throw new NotFoundError("Notification not found", {
        details: { notificationId },
      });
    }
    if (character.id !== notification.characterId) {
      throw new NotFoundError("Notification not found", {
        details: { notificationId },
      });
    }
    return notification;
  }

  public async create(
    data: CreateNotificationInput,
    userToken: UserPublic
  ): Promise<NotificationEntity> {
    const character = await this.characterService.findByUserId(userToken.id);

    const newNotification: NotificationEntity = {
      id: crypto.randomUUID(),
      characterId: character.id,
      title: data.title,
      description: data.description,
      type: data.type,
      isRead: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const created = await this.repo.create(newNotification);
    if (!created) {
      throw new DatabaseError("Failed to persist notification");
    }

    return created;
  }

  public async update(
    notificationId: string,
    data: UpdateNotificationInput,
    userToken: UserPublic
  ): Promise<NotificationEntity> {
    if (notificationId !== data.id) {
      throw new ForbiddenError(
        "You are not allowed to update this notification"
      );
    }

    const found = await this.findById(data.id, userToken);
    const updatedNotification: NotificationEntity = {
      ...found,
      ...data,
    };

    const updated = await this.repo.update(updatedNotification);
    if (!updated) {
      throw new DatabaseError("Failed to persist notification");
    }

    return updated;
  }

  public async delete(
    notificationId: string,
    userToken: UserPublic
  ): Promise<void> {
    await this.findById(notificationId, userToken);

    const deleted = await this.repo.delete(notificationId);
    if (!deleted) {
      throw new DatabaseError("Failed to persist notification");
    }

    return;
  }
}
