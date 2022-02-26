import express from "express";
import userSignup from "../controllers/user/signup";
import userLogin from "../controllers/user/login";
import userInfo from "../controllers/user/info";

const userRouter = express.Router();

// 회원가입
userRouter.post("/signup", userSignup);

// 일반 로그인
userRouter.post("/login", userLogin);

// 유저 정보
userRouter.get("/info", userInfo);

export default userRouter;
