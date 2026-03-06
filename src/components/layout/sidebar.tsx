import { Button } from "@/components/ui/button"

export function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 h-screen border-r bg-background p-4 flex-col gap-3">

      <h2 className="text-xl font-bold mb-4">
        My Dashboard
      </h2>

      <Button variant="ghost">Dashboard</Button>
      <Button variant="ghost">Usuários</Button>
      <Button variant="ghost">Relatórios</Button>
      <Button variant="ghost">Configurações</Button>

    </aside>
  )
}