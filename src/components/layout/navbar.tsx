import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/useTheme"

import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet"

import { Menu, Moon, Sun } from "lucide-react"
import { Sidebar } from "./sidebar"

export function Navbar() {

const { theme, toggleTheme } = useTheme()

  return (
    <header className="h-16 border-b flex items-center justify-between px-6 bg-background">

      {/* Menu */}
      <Sheet>

        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu size={18} />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-64 p-0">

          {/* Sidebar dentro do drawer */}
          <Sidebar />

        </SheetContent>

      </Sheet>

      <div className="flex gap-3">
        <Button onClick={toggleTheme} variant="outline">
          {theme === "dark" ? (
            <Sun size={18} className="text-primary" />
          ) : (
            <Moon size={18} className="text-primary" />
          )}
        </Button>

        <Button>Perfil</Button>
      </div>

    </header>
  )
}