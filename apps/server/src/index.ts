import "dotenv/config";
import express from "express";
import session from "express-session";
import cors from "cors";

import authRoutes from "./modules/auth/auth.routes";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // necessário para cookies de sessão funcionarem entre origens
  }),
);

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET ?? "troque-isso-no-env",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // true apenas em produção com HTTPS
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
    },
  }),
);

app.use("/api/auth", authRoutes);

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
