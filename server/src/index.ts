import { createConnection } from "typeorm";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import userRouter from "./routers/user";
import itemRouter from "./routers/item";
dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10) || 5000;
const HOST: string = process.env.HOST || "localhost";

const app = express();

// app.use(cors());
app.use(express.json());
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use("/user", userRouter);
app.use("/item", itemRouter);

createConnection()
  .then(() => {
    console.log("DB CONNECTION!");
    app.listen(PORT, () => {
      console.log(`Server Starting... ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
