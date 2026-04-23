"use client"

import { Column } from "@tanstack/react-table"

import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"

interface SortableHeaderProps<TData, TValue> {
  column: Column<TData, TValue>
  title: string
  className?: string
}

export function SortableHeader<TData, TValue>({
  column,
  title,
  className,
}: SortableHeaderProps<TData, TValue>) {
  return (
    <Button
      variant="ghost"
      size="sm"
      className={cn("-ml-3 h-8 data-[state=open]:bg-accent cursor-pointer", className)}
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      <span>{title}</span>
      <ArrowUpDown className="ml-2 h-4 w-4 text-muted-foreground" />
    </Button>
  )
}
