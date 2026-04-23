"use client"
import { useTheme } from "next-themes"

import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "h-10 w-10 rounded-xl border-2",
        "bg-slate-950 text-white hover:bg-slate-950 hover:text-white", 
        "dark:bg-white dark:text-slate-950"
      )}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

