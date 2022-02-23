import express, { Request, Response, NextFunction } from "express";

function runServer() {
  const app = express();
  app.listen(5000, () => {
    console.log("start server");
  });
  app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send("Hello worldd");
  });
}

runServer();
