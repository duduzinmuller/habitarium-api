import { db } from "../../db";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";
import { UserService } from "./user.service";

export function makeUserController() {
  const repo = new UserRepository(db);
  const service = new UserService(repo);
  return new UserController(service);
}
