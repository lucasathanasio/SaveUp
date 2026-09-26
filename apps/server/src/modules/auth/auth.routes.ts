import { Router } from "express";
import { requireAuth } from "../../middlewares/requireAuth";
import {
  createAccountController,
  loginController,
  meController,
} from "./auth.controller";

const router = Router();

router.post("/register", createAccountController);
router.post("/login", loginController);
router.get("/me", requireAuth, meController);

export default router;
