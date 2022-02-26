import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../entity/User";
// import { Item } from "../../entity/Item";
import accessToken from "../../functions/accessToken";
import { SignupUserInfo } from "../../interface";

const info = async (req: Request, res: Response) => {
  const userIdOrMessage = await accessToken(req.headers.authorization);

  if (typeof userIdOrMessage === "number") {
    const userRepo = await getRepository(User);
    // const itemRepo = await getRepository(Item);
    const findUser: SignupUserInfo = await userRepo.findOne({
      id: userIdOrMessage,
    });
    delete findUser.salt;
    delete findUser.password;
    // const findItem = await itemRepo.find({ user: findUser });
    // const arrItem = [];
    // findItem.forEach((item) => {
    //   arrItem.push(item.id);
    // });
    // findUser.items = arrItem;
    return res.status(200).json({ data: findUser });
  }
  return res.status(200).send(userIdOrMessage);
};
export default info;
