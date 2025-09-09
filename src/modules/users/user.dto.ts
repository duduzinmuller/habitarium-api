import { z } from "zod";

export const CreateUser = z.object({
  name: z.string().trim().nonempty("Nome é obrigatório"),
  email: z.email("Email inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
}).strict();

export type CreateUserDTO = z.infer<typeof CreateUser>;

export const UpdateUser = z.object({
  id: z.uuid("Id é obrigatório"),
  name: z.string().trim().nonempty("Nome é obrigatório"),
  email: z.email("Email inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres").optional(),
  passwordHash: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
}).strict();

export type UpdateUserDTO = z.infer<typeof UpdateUser>;
