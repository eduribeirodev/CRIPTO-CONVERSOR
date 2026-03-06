import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { userMock } from "@/mocks/userMock"
import { Eye, EyeOff } from "lucide-react"

export function Register() {
   const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmationPassword, setConfirmationPassword] = useState("")

  function handleRegister() {
    setIsLoading(true)

    setTimeout(() => { 
      if (
        name === userMock.name &&
        email === userMock.email &&
        password === userMock.password &&
        confirmationPassword === userMock.confirmation_password
      ) {
        navigate("/home")
      } else {
        alert('Erro ao cadastrar');
      }

      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center ">
      <Card className="w-[450px] space-y-2">
        <CardHeader className="flex flex-col items-center ">
          <img
            src = "/assets/logo.png"
            alt="Logo Crypto"
            className="w-24 h-24 object-contain"
            />
            <h1 className="text-3xl font-semibold">Cadastrar</h1>
            <h2></h2>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="">
            <Label>Nome</Label>
            <Input placeholder="Seu nome" 
              value={name}
              onChange={(e) => setName(e.target.value)}
        />
          </div>

          <div className="space-y-2">
            <Label>Email</Label>
            <Input placeholder="Email"
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
          <div className="space-y-2">
            <Label>Confirmação de Senha</Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="******"
                value={confirmationPassword}
                onChange={(e) => setConfirmationPassword(e.target.value)}
                className="pr-10"
              />

              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 py-3 hover:bg-transparent "
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
            onClick={handleRegister}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Cadastrar"}
          </Button>
          <div className="flex gap-1 justify-center text-sm">
            <p>Já possui conta?</p>
            <a 
              href="/" 
              className="text-purple-900 underline font-medium hover:text-purple-700 dark:text-purple-400"
            >
              Entrar
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}