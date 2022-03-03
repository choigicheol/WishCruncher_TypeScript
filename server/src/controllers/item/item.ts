import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Item } from "../../entity/Item";
import { User } from "../../entity/User";
import accessToken from "../../functions/accessToken";
import { ItemInfo } from "../../interface";
import { upload } from "../../functions/upload";

export const get = async (req: Request, res: Response) => {
  const userIdOrMessage = await accessToken(req.headers.authorization);

  if (typeof userIdOrMessage === "number") {
    const itemRepo = await getRepository(Item);
    const items = await itemRepo.find({
      relations: ["user"],
    });
    const userItem = items.filter((item) => {
      delete item.user.password;
      delete item.user.salt;
      return item.user.id === userIdOrMessage;
    });

    return res.status(200).json({ data: userItem });
  }
  return res.status(200).json({ message: userIdOrMessage });
};

export const post = async (req: Request, res: Response) => {
  // const imagePath = await upload(req.body.image);

  const userIdOrMessage = await accessToken(req.headers.authorization);
  if (typeof userIdOrMessage === "number") {
    const item: Item = new Item();
    const user: User = new User();
    user.id = userIdOrMessage;

    const itemRepo = getRepository(Item);

    let reqBody: ItemInfo = req.body;
    item.name = reqBody.name;
    item.level = reqBody.level;
    item.price = reqBody.price;
    item.user = user;
    if (!reqBody.imagePath) {
      item.imagePath = "./noImage.png";
    } else {
      // item.imagePath = imagePath;
    }

    await itemRepo.save(item);
    return res.status(201).json({ data: item });
  }
};

export const patch = async (req: Request, res: Response) => {
  const userIdOrMessage = await accessToken(req.headers.authorization);
  const itemId: number = Number(req.body.id);
  const updateId: number = Number(req.body.update);

  if (typeof userIdOrMessage === "number") {
    const itemRepo = await getRepository(Item);
    itemRepo.update(itemId, { status: updateId });

    return res.status(200).json({ message: "success" });
  }

  return res.status(200).json({ message: userIdOrMessage });
};

export const remove = async (req: Request, res: Response) => {
  const userIdOrMessage = await accessToken(req.headers.authorization);
  const itemId: number = Number(req.params.itemId);
  console.log(req, "@%@#%@$!@!$@$#%");
  if (typeof userIdOrMessage === "number") {
    const itemRepo = await getRepository(Item);
    itemRepo.delete(itemId);

    return res.status(200).json({ message: "success" });
  }

  return res.status(200).json({ message: userIdOrMessage });
};
