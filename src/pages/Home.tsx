import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatsCard } from "@/components/ui/statsCard";
import { walletBalances, recentTransactions } from "@/mocks/homeMock";
import { ArrowUpCircle, ArrowDownCircle, Users, Wallet } from "lucide-react"




export function Home() {
  return (
    <div className="p-4 md:p-8 space-y-8 w-full min-h-screen">
      <div>
        <h1 className="text-center text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard title="Total Depositado (Mês)" value="R$ 45.231,00" icon={<ArrowUpCircle className="text-green-500" />} />
        <StatsCard title="Total Sacado (Mês)" value="R$ 12.100,00" icon={<ArrowDownCircle className="text-red-500" />} />
        <StatsCard title="Usuários Ativos" value="1.248" icon={<Users className="text-blue-500" />} />
        <StatsCard title="Volume em BRL" value="R$ 1.2M" icon={<Wallet className="text-slate-500" />} />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">

        <Card className="col-span-full lg:col-span-3">
          <CardHeader>
            <CardTitle>Saldos por Ativo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {walletBalances.map((item) => (
              <div key={item.asset} className="flex items-center justify-between border-b pb-2 last:border-0">
                <div className="flex items-center gap-2">
                  <div className=" p-2 rounded-full font-bold text-xs w-10 h-10 flex items-center justify-center">
                    {item.asset}
                  </div>
                  <span className="font-medium">{item.asset}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold">{item.symbol} {item.amount}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="col-span-full lg:col-span-4">
          <CardHeader>
            <CardTitle>Últimas Movimentações</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {tx.type === "DEPOSIT" ? (
                      <ArrowUpCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <ArrowDownCircle className="w-5 h-5 text-red-500" />
                    )}
                    <div>
                      <p className="text-sm font-medium leading-none">
                        {tx.type === "DEPOSIT" ? "Depósito" : "Saque"} de {tx.asset}
                      </p>
                      <p className="text-xs text-muted-foreground">{tx.date}</p>
                    </div>
                  </div>
                  <div className={`text-sm font-bold ${tx.type === "DEPOSIT" ? "text-green-600" : "text-red-600"}`}>
                    {tx.type === "DEPOSIT" ? "+" : "-"} {tx.value}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
