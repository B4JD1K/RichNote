"use client"

import {Moon, Sun} from "lucide-react"
import {useTheme} from "next-themes"
import {Button} from "@/components/ui/button"
import {useEffect, useState} from "react"

export function ThemeToggle() {
  const {setTheme, resolvedTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  // Zapewnia, że komponent działa poprawnie po stronie klienta
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // unika błędów związanych z SSR i hydration

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "light" ? "dark" : "light"
    setTheme(newTheme)
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {resolvedTheme === "light" ? (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-transform duration-300 rotate-0 scale-100"/>
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-transform duration-300 rotate-0 scale-100"/>
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
