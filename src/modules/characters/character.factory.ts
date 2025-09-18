import { db } from "../../db";
import { QuestRepository } from "../quests/quest.repository";
import { CharacterRepository } from "../characters/character.repository";
import { CharacterService } from "../characters/character.service";
import { CharacterController } from "./character.controller";

export function makeCharacterController() {
  const repo = new CharacterRepository(db);
  const questRepo = new QuestRepository(db);
  const service = new CharacterService(repo, questRepo);
  return new CharacterController(service);
}
