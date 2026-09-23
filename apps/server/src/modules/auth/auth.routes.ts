import { Router } from "express";
import { createAccountController } from "./auth.controller";

const router = Router();

router.post("/register", createAccountController);

export default router;
