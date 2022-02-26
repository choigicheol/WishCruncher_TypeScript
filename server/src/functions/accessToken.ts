import * as dotenv from "dotenv";
import { SignupUserInfo } from "../interface";
dotenv.config();
const jwt = require("jsonwebtoken");

const accessToken = async (accToken) => {
  if (!accToken) {
    return "토큰이 존재하지 않습니다.";
  }
  const token: string = accToken.split(" ")[1];

  const decodeToken = await jwt.verify(
    token,
    process.env.ACCESS_SECRET,
    async (err: Error, decode: SignupUserInfo) => {
      if (err) {
        return "토큰이 유효하지 않습니다.";
      }
      return decode.id;
    }
  );
  return decodeToken;
};

export default accessToken;
