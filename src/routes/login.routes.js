import { Router } from "express";
import {
  getLogOut,
  getLogin,
  postLogin,
} from "../controllers/login.controller.js";

const router = Router();

router.get("/login", getLogin);
router.get("/logout", getLogOut);
router.post("/login", postLogin);

export default router;
