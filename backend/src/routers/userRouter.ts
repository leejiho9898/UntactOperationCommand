import express from "express";
import * as userCtrl from "../controllers/userController";

const router = express.Router();

router.post("/register", userCtrl.register);
router.post("/login", userCtrl.login);

export default router;
