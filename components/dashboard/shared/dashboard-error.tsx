"use client"

import { Button } from "@/components/ui/button"
import { AlertCircle, RefreshCcw } from "lucide-react"

interface DashboardErrorProps {
  message?: string
  onRetry: () => void
}

export function DashboardError({ message, onRetry }: DashboardErrorProps) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-background/40 backdrop-blur-[4px] transition-all animate-in fade-in duration-300 rounded-xl">
      <div className="flex flex-col items-center justify-center max-w-md w-full mx-4 p-8 text-center bg-card border-2 border-dashed border-destructive/20 rounded-xl shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="mb-4 rounded-full bg-destructive/10 p-4">
          <AlertCircle className="h-10 w-10 text-destructive" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-destructive">
          Error
        </h3>
        <p className="mb-6 max-w-xs text-sm text-muted-foreground">
          {message || "We couldn't load the users list. Please check your connection."}
        </p>
        <Button 
          onClick={onRetry} 
          variant="outline" 
          className="gap-2 border-destructive/20 hover:bg-destructive/10 hover:text-destructive"
        >
          <RefreshCcw className="h-4 w-4" />
          Retry Loading
        </Button>
      </div>
    </div>
  )
}
