import { z } from "zod";

export const createAccountSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().toLowerCase().email(),
  password: z
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .regex(/[A-Z]/, "A senha deve ter pelo menos uma letra maiúscula")
    .regex(/[0-9]/, "A senha deve ter pelo menos um número"),
});

export type CreateAccountInput = z.infer<typeof createAccountSchema>;
