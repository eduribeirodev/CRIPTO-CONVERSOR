// src/pages/Users.tsx
import { useState, useEffect } from "react"
import { userspageMock } from "@/mocks/userspageMock"
import { SearchBar } from "@/components/searchBar"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { FilterButton } from "@/components/ui/filterButton"

export function Users() {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 5 // usuários por página

  // Filtra por busca e status
  const filteredUsers = userspageMock.filter((user) => {
    const matchSearch = user.name.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === "all" || user.status === filter
    return matchSearch && matchFilter
  })

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)

  // Paginação
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage)

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  // Resetar página ao mudar search ou filter
  useEffect(() => {
    setCurrentPage(1)
  }, [search, filter])

  return (
    <div className="p-4 md:p-8 w-full min-h-screen space-y-6">
      <h1 className="text-center text-3xl font-bold tracking-tight">
        Usuários
      </h1>

      {/* Barra de pesquisa + filtro */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full">
        <div className="flex-1 w-full">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Buscar usuário..."
          />
        </div>

        <FilterButton onFilterChange={(status) => setFilter(status)} />
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto border rounded-lg mt-4">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center w-12">Status</TableHead>
              <TableHead className="text-center">Nome</TableHead>
              <TableHead className="text-center">Email</TableHead>
              <TableHead className="text-center">Criado em</TableHead>
              <TableHead className="text-center">Última vez em</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="text-center">
            {paginatedUsers.map((user) => (
              <TableRow key={user.id}>
               <TableCell className="flex items-center justify-start gap-2 pl-4">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      user.status === "ativo"
                        ? "bg-green-500"
                        : user.status === "pendente"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  />
                  <p className="capitalize text-start">{user.status}</p>
                </TableCell>

                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.create_at}</TableCell>
                <TableCell>{user.last_activity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Paginação */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-6 border-">
        <button
          className="px-3 py-1 border rounded-2xl disabled:opacity-50"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          ◀ 
        </button>

        <span className="text-sm">
          Página {currentPage} de {totalPages}
        </span>

        <button
          className="px-3 py-1 border rounded-2xl disabled:opacity-50"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          ▶
        </button>
      </div>
    </div>
  )
}