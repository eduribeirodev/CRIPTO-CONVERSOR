import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; 

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { userMock } from "@/mocks/userMock";

export function Login() {
  const navigate = useNavigate();


  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function handleLogin() {
    setIsLoading(true);

    setTimeout(() => { 
      if (email === userMock.email && password === userMock.password) {
        navigate("/home");
      } else {
        alert('E-mail ou senha incorretos');
      }
      setIsLoading(false);
    }, 1000);
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-background text-foreground transition-colors">
      <Card className="w-[450px] shadow-lg">
        <CardHeader className="flex flex-col items-center space-y-2 relative">
          <img
            src="/assets/logo.png"
            alt="Logo Crypto"
            className="w-24 h-24 object-contain"
          />
          <h1 className="text-3xl font-semibold">Entrar</h1>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <div className="relative">
              <Input
                id="password"
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
                {showPassword ? (
                  <Eye size={18} className="text-purple-900" />
                ) : (
                  <EyeOff size={18} className="text-purple-900"/>
                )}
              </Button>
            </div>
          </div>

          <Button
            className="w-full mt-5"
            onClick={handleLogin}
            disabled={isLoading || !email || !password}
          >
            {isLoading ? "Carregando..." : "Entrar"}
          </Button>

          <div className="flex gap-1 justify-center text-sm">
            <p>Não possui conta?</p>
            <a 
              href="/register" 
              className="text-purple-900 underline font-medium hover:text-purple-700 dark:text-purple-400"
            >
              Criar conta
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}