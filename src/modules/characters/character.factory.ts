import { db } from "../../db";
import { CharacterRepository } from "../characters/character.repository";
import { CharacterService } from "../characters/character.service";
import { CharacterController } from "./character.controller";

export function makeCharacterController() {
  const repo = new CharacterRepository(db);
  const service = new CharacterService(repo);
  return new CharacterController(service);
}
