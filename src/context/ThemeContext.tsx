import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextData {
  theme: Theme;
  toggleTheme: () => void;
}

// 1. Criamos o contexto
const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

// 2. Criamos o Provider (quem vai envolver a aplicação)
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Busca o tema salvo no navegador ao iniciar
    const saved = localStorage.getItem("@nexus:theme");
    return (saved as Theme) || "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("@nexus:theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Hook customizado para usar em qualquer lugar
export const useTheme = () => useContext(ThemeContext);