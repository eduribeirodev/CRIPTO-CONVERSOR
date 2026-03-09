import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { depositMock } from "@/mocks/depositMock"
import type { User } from "@/types/User"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast, Toaster } from "sonner"
import { useState } from "react"

type Balance = Record<string, number>



let transactions: any[] = []

export function Deposit() {

  const [selectedUser, setSelectedUser] = useState("")
  const [selectedUserData, setSelectedUserData] = useState<User | null>(null)

  const [selectedAsset, setSelectedAsset] = useState("")
  const [amount, setAmount] = useState("")
  const [note, setNote] = useState("")

  const handleSelectUser = (value: string) => {
    setSelectedUser(value)

    const user = depositMock.find(u => u.id.toString() === value)
    setSelectedUserData(user || null)
  }

  const handleDeposit = () => {

    if (!selectedUser || !selectedAsset || !amount) {
      toast.error("Preencha todos os campos obrigatórios!")
      return
    }

    const userIndex = depositMock.findIndex(
      u => u.id.toString() === selectedUser
    )

    if (userIndex === -1) return

    const value = parseFloat(amount)

    depositMock[userIndex].balance[selectedAsset] += value

    transactions.push({
      userId: selectedUser,
      asset: selectedAsset,
      amount: value,
      note,
      date: new Date().toLocaleString()
    })

    setSelectedUserData({ ...depositMock[userIndex] })

    setSelectedAsset("")
    setAmount("")
    setNote("")

    toast.success("Depósito realizado com sucesso!")
  }

  return (
    <div className="min-h-screen p-6 flex justify-center items-center">
      <Toaster position="top-right" richColors />

      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-6">

        <Card className="shadow-lg ">
          <CardHeader>
            <CardTitle className="text-center">Saldo do Usuário</CardTitle>
          </CardHeader>

          <CardContent>

            {!selectedUserData && (
              <p className="text-sm text-gray-500">
                Selecione um usuário para visualizar o saldo.
              </p>
            )}

            {selectedUserData && (
              <table className="w-full border rounded-lg overflow-hidden text-sm">
                <thead >
                  <tr>
                    <th className="p-2 text-left">Ativo</th>
                    <th className="p-2 text-left">Saldo</th>
                  </tr>
                </thead>

                <tbody>
                  {Object.entries(selectedUserData.balance as Record<string, number>).map(
                    ([asset, value]) => {
                      if (value <= 0) return null

                      return (
                        <tr key={asset} className="border-t">
                          <td className="p-2 font-medium">{asset}</td>
                          <td className="p-2">
                            {asset === "BRL" ? `R$ ${value}` : value}
                          </td>
                        </tr>
                      )
                    }
                  )}
                </tbody>

              </table>
            )}

          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle>Depósito</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">

            {/* Usuário */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Usuário</label>

              <Select
                value={selectedUser}
                onValueChange={handleSelectUser}
              >
                <SelectTrigger >
                  <SelectValue placeholder="Selecione o usuário" />
                </SelectTrigger>

                <SelectContent position="popper" className="bg-secondary">
                  {depositMock.map(user => (
                    <SelectItem
                      key={user.id}
                      value={user.id.toString()}
                    >
                      {user.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Ativo */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Ativo</label>

              <Select
                value={selectedAsset}
                onValueChange={setSelectedAsset}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o ativo" />
                </SelectTrigger>

                <SelectContent position="popper" className="bg-secondary">
                  <SelectItem value="BRL">BRL</SelectItem>
                  <SelectItem value="BTC">BTC</SelectItem>
                  <SelectItem value="ETH">ETH</SelectItem>
                  <SelectItem value="USDT">USDT</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Valor */}
            <Input
              type="number"
              placeholder="Digite o valor"
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />

            <Button
              className="w-full"
              onClick={handleDeposit}
              disabled={!selectedUser || !selectedAsset || !amount}
            >
              Confirmar Depósito
            </Button>

          </CardContent>
        </Card>

      </div>
    </div>
  )
}