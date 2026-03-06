import { useEffect } from "react"
import { AppRoutes } from "./routes/AppRoutes"


function App() {
  useEffect(() => {
    const theme = localStorage.getItem("nexus-theme")

    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])
  return <AppRoutes />
}

export default App