import express from "express";
import * as userCtrl from "../controllers/userController";
import checkLoggedIn from "./../lib/checkLoggedin";

const router = express.Router();

router.post("/register", userCtrl.register);
router.post("/login", userCtrl.login);
router.post("/logout", checkLoggedIn, userCtrl.logout);
router.post("/addFriend", checkLoggedIn, userCtrl.addFriend);
router.delete("/deleteFriend/:friendId", checkLoggedIn, userCtrl.deleteFriend);
router.get("/readFriendList", checkLoggedIn, userCtrl.readFriendList);
router.post("/uploadImg", userCtrl.uploadImg);
export default router;
