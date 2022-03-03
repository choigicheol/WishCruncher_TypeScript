import express from "express";
import { get, post, patch, remove } from "../controllers/item/item";
import multer from "multer";
const upload = multer();

const itemRouter = express.Router();

// 아이템정보
itemRouter.get("/", get);

// 아이템등록
itemRouter.post("/", upload.none(), post);

// 아이템수정
itemRouter.patch("/", patch);

// 아이템삭제
itemRouter.delete("/:itemId", remove);

export default itemRouter;
