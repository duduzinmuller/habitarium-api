import { z } from "zod";

export const createUserSchema = z
  .object({
    name: z
      .string("Senha deve ter no mínimo 6 caracteres")
      .trim()
      .nonempty("Nome é obrigatório"),
    email: z.email("Email inválido"),
    password: z
      .string("Senha deve ter no mínimo 6 caracteres")
      .min(6, "Senha deve ter no mínimo 6 caracteres"),
  })
  .strict();

export type CreateUserDTO = z.infer<typeof createUserSchema>;

export const updateUserSchema = z
  .object({
    id: z.uuid("Id é obrigatório"),
    name: z.string("Nome é obrigatório").trim().nonempty("Nome é obrigatório"),
    email: z.email("Email inválido"),
    password: z
      .string("Senha deve ter no mínimo 6 caracteres")
      .min(6, "Senha deve ter no mínimo 6 caracteres")
      .optional(),
  })
  .strict();

export type UpdateUserDTO = z.infer<typeof updateUserSchema>;
