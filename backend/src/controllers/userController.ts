import { Request, Response } from "express";
import User from "../models/user";

//회원가입
export const register = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  try {
    //이메일이 존재할 경우 실패 메세지전송
    const exist = await User.findByEmail(email);
    if (exist) {
      return res.status(409).json({
        success: false,
        message: "email is exist",
      });
    }

    // 유저 생성
    const user = new User({ email, name });
    await user.setPassword(password); //패스워드를 암호화 시킴
    await user.save(); //데이터베이스에 저장

    const token = await user.generateToken(); //토큰 생성 (토큰이 있으면 로그인 된 상태)
    const data = user.serialize(); // 응답할 데이터에서 password 필드 제거

    //성공시 전송
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

// 로그인
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // email , password 가 안들어왔으면 실패처리
  if (!email || !password) {
    return res.status(401).json({
      success: false,
      message: "정보가 입력되지 않았습니다 !",
    });
  }

  try {
    // 이메일이 존재하는지 확인
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json({
        success: false,
        message: "계정이 존재하지 않습니다 !",
      });
    }

    //비밀번호가 맞는지 확인
    const valid = await user.checkPassword(password);

    if (!valid) {
      return res.status(401).json({
        success: false,
        message: "잘못된 비밀번호 입니다",
      });
    }

    const token = await user.generateToken();
    const data = user.serialize();

    res.cookie("user", token).status(200).json({
      success: true,
      user: data,
    });
  } catch (e) {
    res.status(500).json({
      error: e,
    });
  }
};
