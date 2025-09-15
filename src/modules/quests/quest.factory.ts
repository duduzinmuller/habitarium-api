import { db } from "../../db";
import { CharacterRepository } from "../characters/character.repository";
import { QuestController } from "./quest.controller";
import { QuestRepository } from "./quest.repository";
import { QuestService } from "./quest.service";

export function makeQuestController() {
  const repo = new QuestRepository(db);
  const characterRepo = new CharacterRepository(db);
  const service = new QuestService(repo, characterRepo);
  return new QuestController(service);
}
