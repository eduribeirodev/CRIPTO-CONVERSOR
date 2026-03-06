import { Button } from "@/components/ui/button"
import { Users, Settings, Home, Repeat, HandCoins, Banknote } from "lucide-react"
import { useNavigate } from "react-router-dom"

const menuItems = [
  { label: "Home", icon: Home, page: "/home" },
  { label: "Usuários", icon: Users, page: "/users" },
  { label: "Depósito", icon: Banknote, page: "/deposit" },
  { label: "Saque", icon: HandCoins, page: "/sake" },
  { label: "Conversão", icon: Repeat, page: "/conversion" },
  { label: "Configurações", icon: Settings, page: "/config" },
]

export function Sidebar() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col justify-between h-full p-4">

      <nav className="flex flex-col gap-3">

        {menuItems.map((item) => {
          const Icon = item.icon

          return (
            <Button
              key={item.label}
              variant="ghost"
              onClick={() => navigate(item.page)}
              className="justify-start gap-4 text-muted-foreground hover:text-foreground hover:bg-secondary w-full"
            >
              <Icon size={18} />
              {item.label}
            </Button>
          )
        })}

      </nav>

      <Button
        onClick={() => navigate('/')}
        variant="ghost"
        className="w-full justify-center text-red-500 hover:text-red-600 hover:bg-red-50"
      >
        Logout
      </Button>

    </div>
  )
}