import type { User } from "@/types/User";

export const sakeMock: User[] = [
  {
    id: 2,
    name: "Ana Souza",
    email: "ana@email.com",
    password: "123456",
    confirmation_password: "123456",
    balance: { BRL: 1000, BTC: 0.1, ETH: 0.5, USDT: 50 }
  },
  {
    id: 3,
    name: "Carlos Silva",
    email: "carlos@email.com",
    password: "123456",
    confirmation_password: "123456",
    balance: { BRL: 500, BTC: 0.05, ETH: 0.2, USDT: 20 }
  }
]