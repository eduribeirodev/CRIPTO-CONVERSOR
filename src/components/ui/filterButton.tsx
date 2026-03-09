import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"

interface FilterButtonProps {
  onFilterChange: (status: string) => void
}

export function FilterButton({ onFilterChange }: FilterButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Filter size={18} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="bg-secondary">
        <DropdownMenuItem onClick={() => onFilterChange("all")}>
          Todos
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => onFilterChange("ativo")}>
          Ativo
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => onFilterChange("pendente")}>
          Pendente
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => onFilterChange("desativado")}>
          Desativado
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}