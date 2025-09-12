import { z } from "zod";

export const createUserSchema = z
  .object({
    name: z.string("Name is required").trim().min(1, "Name is required"),
    email: z.email("Invalid email"),
    password: z
      .string("Password is required")
      .min(6, "Password must be at least 6 characters"),
  })
  .strict();

export type CreateUserInput = z.infer<typeof createUserSchema>;

export const updateUserSchema = z
  .object({
    id: z.uuid("Invalid id"),
    name: z.string("Name is required").trim().min(1, "Name is required"),
    email: z.email("Invalid email"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .optional(),
    createdAt: z.coerce.date("Invalid date").optional(),
    updatedAt: z.coerce.date("Invalid date").optional(),
  })
  .strict();

export type UpdateUserInput = z.infer<typeof updateUserSchema>;

export type UserEntity = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
};

export type UserPublic = Omit<UserEntity, "passwordHash">;
