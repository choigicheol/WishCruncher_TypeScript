export interface Color {
  color: string;
}

export interface SubmitDisabled {
  isSubmitDisabled: boolean;
}

export interface ButtonRole {
  role: string;
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
