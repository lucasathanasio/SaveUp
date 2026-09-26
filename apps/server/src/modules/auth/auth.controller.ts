import { Request, Response } from "express";
import { createAccountSchema, loginSchema } from "@saveup/shared";

import {
  createAccount,
  login,
  getSessionUser,
  EmailAlreadyInUseError,
  InvalidCredentialsError,
} from "./auth.service";

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

export async function loginController(req: Request, res: Response) {
  const parsed = loginSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      message: "Dados inválidos",
      errors: parsed.error.flatten().fieldErrors,
    });
  }

  try {
    const user = await login(parsed.data);

    req.session.userId = user.id;

    return res.status(200).json(user);
  } catch (error) {
    if (error instanceof InvalidCredentialsError) {
      return res.status(401).json({ message: error.message });
    }
    console.error(error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function meController(req: Request, res: Response) {
  const user = await getSessionUser(req.session.userId!);

  if (!user) {
    return res.status(401).json({ message: "Não autenticado" });
  }

  return res.status(200).json(user);
}
