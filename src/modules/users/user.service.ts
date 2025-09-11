import { NotFoundError } from "../../shared/errors";
import type { UserRepository } from "./user.repository";

export class UserService {
  constructor(private readonly repo: UserRepository) {}

  public async findById(id: string) {
    const user = await this.repo.findPublicById(id);

    if (!user) throw new NotFoundError("User not found", { details: { id } });

    return user;
  }
}
