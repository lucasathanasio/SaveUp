import { Router } from "express";
import { requireAuth } from "../../middlewares/requireAuth";
import {
  createAccountController,
  loginController,
  meController,
  logoutController,
} from "./auth.controller";

const router = Router();

router.post("/register", createAccountController);
router.post("/login", loginController);
router.get("/me", requireAuth, meController);
router.post("/logout", logoutController);

export default router;
