import { eq } from "drizzle-orm";

import type { Db } from "../../db";
import { users } from "../../db/schemas/users";
import type { UserDTO } from "./user.dto";

export class UserRepository {
  constructor(private readonly db: Db) {}

  public async findById(id: string): Promise<UserDTO | void> {
    const [result] = await this.db.select().from(users).where(eq(users.id, id));
    return result;
  }

  public async findAll(): Promise<UserDTO[]> {
    const result = await this.db.select().from(users);
    return result;
  }

  public async delete(id: string): Promise<void> {
    await this.db.delete(users).where(eq(users.id, id));
  }

  public async create(data: UserDTO): Promise<UserDTO | void> {
    const [result] = await this.db.insert(users).values(data).returning();
    return result;
  }

  public async update(id: string, data: UserDTO): Promise<UserDTO | void> {
    const [result] = await this.db
      .update(users)
      .set(data)
      .where(eq(users.id, id))
      .returning();
    return result;
  }
}
