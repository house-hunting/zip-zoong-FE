import { atom } from "jotai";

export interface LoginDataType {
  id?: string;
  email: string;
  nickname?: string;
  password: string;
  confirmPW?: string;
  provider?: string;
  img?: string;
}
export const loginData = atom<LoginDataType | null>(null);
