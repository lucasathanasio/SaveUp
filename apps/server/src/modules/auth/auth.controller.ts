import { Request, Response } from "express";
import { createAccountSchema } from "./auth.schema";
import { createAccount, EmailAlreadyInUseError } from "./auth.service";

export async function createAccountController(req: Request, res: Response) {
  const parsed = createAccountSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      message: "Dados inválidos",
      errors: parsed.error.flatten().fieldErrors,
    });
  }

  try {
    const user = await createAccount(parsed.data);
    return res.status(201).json(user);
  } catch (error) {
    if (error instanceof EmailAlreadyInUseError) {
      return res.status(409).json({ message: error.message });
    }

    console.error(error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}
