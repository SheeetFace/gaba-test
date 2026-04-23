"use client"

import { Search, X } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"

interface TableSearchProps {
  value: string
  onChange: (value: string) => void
}

export function TableSearch({ value, onChange }: TableSearchProps) {
  return (
    <div className="flex items-center relative max-w-sm group">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      
      <Input
        placeholder="Search by name..."
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "pl-9 h-9 pr-8 transition-all", 
          value && "border-primary/40 shadow-sm"
        )}
      />

      {value && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onChange("")}
          className="absolute right-1 top-1 h-7 w-7 hover:bg-transparent text-muted-foreground hover:text-foreground cursor-pointer"
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}

