import { db } from "../../db";
import { CharacterRepository } from "../characters/character.repository";
import { CharacterService } from "../characters/character.service";
import { QuestController } from "./quest.controller";
import { QuestRepository } from "./quest.repository";
import { QuestService } from "./quest.service";

export function makeQuestController() {
  const repo = new QuestRepository(db);
  const characterRepo = new CharacterRepository(db);
  const characterService = new CharacterService(characterRepo);
  const service = new QuestService(repo, characterService);
  return new QuestController(service);
}
