import { z } from "zod";

export const createUserSchema = z
  .object({
    name: z.string("Nome é obrigatório").trim().nonempty("Nome é obrigatório"),
    email: z.email("Email inválido"),
    password: z
      .string("Senha deve ter no mínimo 6 caracteres")
      .min(6, "Senha deve ter no mínimo 6 caracteres"),
  })
  .strict();

export type CreateUserInput = z.infer<typeof createUserSchema>;

export const updateUserSchema = z
  .object({
    id: z.uuid("Id é obrigatório"),
    name: z.string("Nome é obrigatório").trim().nonempty("Nome é obrigatório"),
    email: z.email("Email inválido"),
    password: z
      .string("Senha é obrigatória")
      .min(6, "Senha deve ter no mínimo 6 caracteres")
      .optional(),
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
