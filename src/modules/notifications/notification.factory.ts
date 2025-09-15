import { db } from "../../db";
import { CharacterRepository } from "../characters/character.repository";
import { CharacterService } from "../characters/character.service";
import { NotificationController } from "./notification.controller";
import { NotificationRepository } from "./notification.repository";
import { NotificationService } from "./notification.service";

export function makeNotificationController() {
  const repo = new NotificationRepository(db);
  const characterRepo = new CharacterRepository(db);
  const characterService = new CharacterService(characterRepo);
  const service = new NotificationService(repo, characterService);
  return new NotificationController(service);
}
