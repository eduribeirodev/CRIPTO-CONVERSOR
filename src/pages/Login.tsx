import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { userMock } from "@/mocks/userMock"
import { useTheme } from "@/hooks/useTheme"

export function Login() {
  const navigate = useNavigate()

  const { theme } = useTheme(); 

  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  function handleLogin() {
    setIsLoading(true)

    setTimeout(() => { 
      if (
        email === userMock.email && password === userMock.password) {
        alert("Login Realizado")
        navigate("/home")
      } else {
        alert('Erro')
      }

      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center ">
      <Card className="w-[450px]">
        <CardHeader className="flex flex-col items-center space-y-2">
          <img
            src="/assets/logo.png"
            alt="Logo Crypto"
            className="w-24 h-24 object-contain"
          />

          <h1 className="text-3xl font-semibold">Entrar</h1>
        </CardHeader>

        <CardContent className="space-y-4">

          
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              placeholder="email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Senha</Label>

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-10"
              />

              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye size={18} className="text-purple-900" /> : <EyeOff size={18} className="text-purple-900"/>}
              </Button>
            </div>
          </div>

          <Button
            className={`w-full mt-5 transition-opacity ${
              isLoading ? "opacity-60 cursor-not-allowed" : ""
            }`}
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Criar conta"}
          </Button>

          <div className="flex">
            <p className="pl-1 pr-1">Não possui conta?</p>
            <a href="/register" className="text-purple-900 underline">
                        {theme === "dark" ? <a href="Criar"></a>
            
           : 
            <a href="/register"> </a>
          }
            </a>
          </div>

        </CardContent>
      </Card>
    </div>
  )
}