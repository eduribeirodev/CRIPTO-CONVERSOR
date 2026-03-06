import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Login } from "@/pages/Login"
import { Register } from "@/pages/Register"
import { Home } from "@/pages/Home"

import { DashboardLayout } from "@/layouts/DashboardLayout"
import { ThemeProvider } from "@/context/ThemeContext"

export function AppRoutes() {
  return (
    <ThemeProvider>

      <BrowserRouter>

        <Routes>

          
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          
          <Route element={<DashboardLayout />}>

            <Route path="/home" element={<Home />} />

          </Route>

        </Routes>

      </BrowserRouter>
    </ThemeProvider>
  )
}