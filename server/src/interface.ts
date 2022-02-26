import { User } from "./entity/User";
import { Item } from "./entity/Item";

export interface SignupUserInfo {
  id: number;
  nickname: string;
  email: string;
  password: string;
  loginType: boolean;
  salt?: string;
  items?: Item[];
}

export interface ItemInfo {
  id: number;
  name: string;
  price: string;
  level: number;
  status: number;
  imagePath: string;
  user?: User;
}
