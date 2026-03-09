import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

// Importa os mocks de outra pasta
import { sakeMock } from "@/mocks/sakeMock";

type User = {
  id: number;
  name: string;
  balance: { [key: string]: number };
};

type Transaction = {
  userId: number;
  asset: string;
  amount: number;
  type: "withdrawal";
};

export function Sake() {
  const usersMock: User[] = sakeMock;

  
  const assets: string[] = Array.from(
    new Set(usersMock.flatMap((u) => Object.keys(u.balance)))
  );

  const [selectedUser, setSelectedUser] = useState<number | "">("");
  const [selectedAsset, setSelectedAsset] = useState<string | "">("");
  const [amount, setAmount] = useState<number | "">("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const currentUser = usersMock.find((u) => u.id === selectedUser);
  const currentBalance =
    currentUser && selectedAsset ? currentUser.balance[selectedAsset] || 0 : 0;

  const handleWithdraw = () => {
    setError(null);
    setSuccess(null);

    if (!selectedUser || !selectedAsset || !amount || amount <= 0) {
      setError("Preencha todos os campos corretamente.");
      return;
    }

    if (amount > currentBalance) {
      setError("Saldo insuficiente.");
      return;
    }

    if (currentUser) currentUser.balance[selectedAsset] -= amount as number;

    setTransactions((prev) => [
      { userId: currentUser!.id, asset: selectedAsset, amount: amount as number, type: "withdrawal" },
      ...prev
    ]);

    setSuccess(`Saque de ${amount} ${selectedAsset} realizado com sucesso!`);
    setAmount("");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-6 px-4">
      <h1 className="text-3xl font-bold text-center">Saque</h1>

      <Card>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Usuário */}
            <div>
              <label className="block mb-1 font-medium">Usuário</label>
              <Select
                value={selectedUser.toString()}
                onValueChange={(v) => setSelectedUser(Number(v))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione um usuário" />
                </SelectTrigger>
                <SelectContent position="popper" className="bg-secondary">
                  {usersMock.map((user) => (
                    <SelectItem key={user.id} value={user.id.toString()}>
                      {user.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Ativo */}
            <div>
              <label className="block mb-1 font-medium">Ativo</label>
              <Select
                value={selectedAsset}
                onValueChange={(v) => setSelectedAsset(v)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione um ativo" />
                </SelectTrigger>
                <SelectContent position="popper" className="bg-secondary">
                  {assets.map((asset) => (
                    <SelectItem key={asset} value={asset}>
                      {asset}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedUser && selectedAsset && (
                <p className="mt-1 text-sm text-gray-500">
                  Saldo disponível: {currentBalance} {selectedAsset}
                </p>
              )}
            </div>

            
            <div className="sm:col-span-2">
              <label className="block mb-1 font-medium">Valor do saque</label>
              <Input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          <Button onClick={handleWithdraw} className="w-full sm:w-auto mt-2">
            Sacar
          </Button>

          {error && <p className="text-red-500 font-medium mt-2">{error}</p>}
          {success && <p className="text-green-500 font-medium mt-2">{success}</p>}
        </CardContent>
      </Card>
    </div>
  );
}