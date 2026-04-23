'use client'

import { Button } from "@/components/ui/button"
import { RefreshCcw } from "lucide-react"

interface ErrorProps {
    error: Error & { digest?: string },
    reset: () => void
}

export default function Error({error, reset}: ErrorProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-4">
            <h2 className="text-xl font-bold text-destructive">Something went wrong!</h2>

            <p className="text-muted-foreground bg-muted p-2 rounded border font-mono text-sm">
                {error.message || "Unknown error"}
            </p>

            <Button
                onClick={() => reset()}
                variant="default"
                className="gap-2 font-medium"
            >
                <RefreshCcw className="h-4 w-4" />
                Try again
            </Button>
        </div>
    )
}
