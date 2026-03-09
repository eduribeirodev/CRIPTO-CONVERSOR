import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Login } from "@/pages/Login"
import { Register } from "@/pages/Register"
import { Home } from "@/pages/Home"

import { DashboardLayout } from "@/layouts/DashboardLayout"
import { ThemeProvider } from "@/context/ThemeContext"
import { Users } from "@/pages/Users"
import { Deposit } from "@/pages/Deposit"
import { Conversion } from "@/pages/Conversion"
import { Sake } from "@/pages/Sake"

export function AppRoutes() {
  return (
    <ThemeProvider>

      <BrowserRouter>

        <Routes>

          
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          
          <Route element={<DashboardLayout />}>

            <Route path="/home" element={<Home />} />
            <Route path='/users' element={<Users />} />
            <Route path="/deposit" element={<Deposit/>}/>
            <Route path="/sake" element={<Sake/>}/>
            <Route path="/conversion" element ={<Conversion/>}/>

          </Route>

        </Routes>

      </BrowserRouter>
    </ThemeProvider>
  )
}