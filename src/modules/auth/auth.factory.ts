import { db } from "../../db";
import { CharacterRepository } from "../characters/character.repository";
import { CharacterService } from "../characters/character.service";
import { UserRepository } from "../users/user.repository";
import { UserService } from "../users/user.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

export function makeAuthController() {
  const userRepository = new UserRepository(db);
  const characterRepository = new CharacterRepository(db);
  const characterService = new CharacterService(characterRepository);
  const userService = new UserService(userRepository, characterService);
  const service = new AuthService(userRepository, userService);
  return new AuthController(service);
}
