import { eq } from "drizzle-orm";

import type { Db } from "../../db";
import { users } from "../../db/schemas/users";
import type { UserEntity, UserPublic } from "./user.entity";

export class UserRepository {
  constructor(private readonly db: Db) {}

  public async findPublicById(id: string): Promise<UserPublic | void> {
    const [result] = await this.db
      .select({
        id: users.id,
        email: users.email,
        name: users.name,
        createdAt: users.createdAt,
        updatedAt: users.updatedAt,
      })
      .from(users)
      .where(eq(users.id, id));

    return result;
  }

  public async findById(id: string): Promise<UserEntity | void> {
    const [result] = await this.db.select().from(users).where(eq(users.id, id));

    return result;
  }

  public async findAllPublic(): Promise<UserPublic[]> {
    const result = await this.db
      .select({
        id: users.id,
        email: users.email,
        name: users.name,
        createdAt: users.createdAt,
        updatedAt: users.updatedAt,
      })
      .from(users);

    return result;
  }

  public async delete(id: string): Promise<void> {
    await this.db.delete(users).where(eq(users.id, id));
  }

  public async create(data: UserEntity): Promise<UserEntity | void> {
    const [result] = await this.db.insert(users).values(data).returning();

    return result;
  }

  public async update(
    id: string,
    data: UserEntity
  ): Promise<UserPublic | void> {
    const [result] = await this.db
      .update(users)
      .set(data)
      .where(eq(users.id, id))
      .returning({
        id: users.id,
        email: users.email,
        name: users.name,
        createdAt: users.createdAt,
        updatedAt: users.updatedAt,
      });

    return result;
  }
}
