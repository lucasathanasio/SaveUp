import bcrypt from "bcrypt";
import { prisma } from "../../config/prisma";
import { CreateAccountInput } from "./auth.schema";

const SALT_ROUNDS = 10;

export class EmailAlreadyInUseError extends Error {
  constructor() {
    super("Este e-mail já está em uso");
    this.name = "EmailAlreadyInUseError";
  }
}

export async function createAccount(input: CreateAccountInput) {
  const existingUser = await prisma.user.findUnique({
    where: { email: input.email },
  });

  if (existingUser) {
    throw new EmailAlreadyInUseError();
  }

  const passwordHash = await bcrypt.hash(input.password, SALT_ROUNDS);

  const user = await prisma.user.create({
    data: {
      name: input.name,
      email: input.email,
      passwordHash,
      settings: {
        create: {}, // usa os @default() do schema: theme=light, currency=BRL, language=pt-BR...
      },
    },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      // nunca retornar passwordHash, nem por engano
    },
  });

  return user;
}
