import { Request, Response } from "express";
import User from "../models/user";

//회원가입
export const register = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  try {
    const exist = await User.findByEmail(email);
    if (exist) {
      return res.status(409).json({
        success: false,
        message: "email is exist",
      });
    }

    const user = new User({ email, name });

    await user.setPassword(password);
    await user.save();
    const token = await user.generateToken();
    const data = user.serialize();

    res.cookie("user", token).status(200).json({
      success: true,
      user: data,
    });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};
