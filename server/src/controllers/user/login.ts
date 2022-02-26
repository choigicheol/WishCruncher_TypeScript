import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../entity/User";
import * as crypto from "crypto";
const jwt = require("jsonwebtoken");

const login = async (req: Request, res: Response) => {
  try {
    const userRepo = getRepository(User);
    const loginEmail: string = req.body.email;

    const findUserData = await userRepo.findOne({
      email: loginEmail,
    });

    if (findUserData) {
      const userPassword: string = req.body.password;
      const salt = findUserData.salt;
      const encodePassword = crypto
        .pbkdf2Sync(userPassword, salt, 256, 64, "sha512")
        .toString("base64");

      if (encodePassword === findUserData.password) {
        delete findUserData.salt;
        delete findUserData.password;
        const payload = { ...findUserData };
        const accessToken: string = jwt.sign(
          payload,
          process.env.ACCESS_SECRET,
          {
            expiresIn: "12h",
          }
        );
        const refreshToken: string = jwt.sign(
          payload,
          process.env.REFRESH_SECRET,
          {
            expiresIn: "50d",
          }
        );
        return res.status(200).json({ accessToken, id: findUserData.id });
        // .cookie("refreshToken", refreshToken, {
        //   httpOnly: true,
        // });
      }
      return res.status(200).send("Please confirm your password");
    }
    return res.status(200).send("no data");
  } catch (e) {
    throw new Error(e);
  }
};
export default login;
