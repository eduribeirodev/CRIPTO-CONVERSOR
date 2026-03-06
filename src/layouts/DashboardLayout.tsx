import { Navbar } from "@/components/layout/navbar"
import { Outlet } from "react-router-dom"

export function DashboardLayout() {
  return (
    <div className="flex h-screen w-screen flex-col">

      <Navbar />

      <main className="p-6 overflow-auto flex-1">
        <Outlet />
      </main>

    </div>
  )
}