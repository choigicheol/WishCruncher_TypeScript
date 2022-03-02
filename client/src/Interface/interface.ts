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
}

export interface IsActivate {
  isAddButton: boolean;
}

export interface UserInfo {
  id: number;
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
  status: number;
  user: UserInfo;
}
