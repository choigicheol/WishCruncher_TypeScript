import express from "express";
import { get, post, patch } from "../controllers/item/item";

const itemRouter = express.Router();

// 아이템정보
itemRouter.get("/", get);

// 아이템정보
itemRouter.post("/", post);

// 아이템정보
itemRouter.patch("/", patch);

export default itemRouter;
