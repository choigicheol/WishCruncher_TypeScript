import { AxiosRequestConfig } from "axios";

export interface Color {
  color: string;
}

export interface SubmitDisabled {
  role?: string;
  isSubmitDisabled?: boolean;
}

export interface Margin0 {
  margin0: boolean;
}

export interface LoginState {
  isLogin: boolean;
  id: string | null;
  accessToken: string | null;
  user?: UserInfo;
}

export interface IsActivate {
  isAddButton: boolean;
}

export interface UserInfo {
  id?: number;
  email: string;
  nickname: string;
  loginType: boolean;
}

export interface ItemInfo {
  id: number;
  imagePath: string;
  level: number;
  name: string;
  price: string;
  status: 0 | 1 | 2 | 3;
  user: UserInfo;
}

export interface ItemGetResponse {
  data: { data?: ItemInfo[]; message?: string };
  status: any;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
  request?: any;
}
