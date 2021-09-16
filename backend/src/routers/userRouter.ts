import express from "express";
import * as userCtrl from "../controllers/userController";
import checkLoggedIn from "./../lib/checkLoggedin";

const router = express.Router();

router.post("/register", userCtrl.register);
router.post("/login", userCtrl.login);
router.post("/logout", userCtrl.logout);
router.post("/addFriend", userCtrl.addFriend);
router.delete("/deleteFriend/:friendId", userCtrl.deleteFriend);
export default router;
