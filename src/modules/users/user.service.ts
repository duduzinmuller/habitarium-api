import type { UserRepository } from "./user.repository";

export class UserService {
  constructor(private readonly repo: UserRepository) {}

  public async findById(id: string) {
    const user = await this.repo.findById(id);
    return user;
  }
}
