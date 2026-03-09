export type Balance = Record<string, number>;

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  confirmation_password: string;
  balance: Balance;
}

export interface UserRegister {
  name: string;
  email: string;
  password: string;
  confirmation_password: string;
}