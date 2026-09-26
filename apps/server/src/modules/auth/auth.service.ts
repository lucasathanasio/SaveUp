import bcrypt from "bcrypt";
import { prisma } from "../../config/prisma";
import { CreateAccountInput, LoginInput } from "@saveup/shared";

const SALT_ROUNDS = 10;

export class EmailAlreadyInUseError extends Error {
  constructor() {
    super("Este e-mail já está em uso");
    this.name = "EmailAlreadyInUseError";
  }
}

export class InvalidCredentialsError extends Error {
  constructor() {
    super("E-mail ou senha inválidos");
    this.name = "InvalidCredentialsError";
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
      settings: { create: {} },
    },
    select: { id: true, name: true, email: true, createdAt: true },
  });

  return user;
}

export async function login(input: LoginInput) {
  const user = await prisma.user.findUnique({
    where: { email: input.email },
  });

  if (!user) {
    throw new InvalidCredentialsError();
  }

  const passwordMatches = await bcrypt.compare(
    input.password,
    user.passwordHash,
  );

  if (!passwordMatches) {
    throw new InvalidCredentialsError();
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
}

export async function getSessionUser(userId: number) {
  return prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, name: true, email: true },
  });
}
