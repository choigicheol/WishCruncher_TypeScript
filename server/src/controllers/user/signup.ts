import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../entity/User";
import * as crypto from "crypto";
import { SignupUserInfo } from "../../interface";

const signup = async (req: Request, res: Response) => {
  try {
    const user: User = new User();
    const userRepo = getRepository(User);
    const salt = crypto.randomBytes(64).toString("hex");

    let reqBody: SignupUserInfo = req.body;

    const encodePassword = crypto
      .pbkdf2Sync(reqBody.password, salt, 256, 64, "sha512")
      .toString("base64");

    user.nickname = reqBody.nickname;
    user.email = reqBody.email;
    user.password = encodePassword;
    user.salt = salt;
    // user.loginType = reqBody.loginType;

    await userRepo.save(user);
    delete user.password;
    delete user.salt;
    return res.status(201).json(user);
  } catch (e) {
    throw new Error(e);
  }
};

export default signup;
