import { db } from "../../db";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";
import { UserService } from "./user.service";

const repo = new UserRepository(db);
const service = new UserService(repo);
const controller = new UserController(service);

export const UserFactory = controller;
