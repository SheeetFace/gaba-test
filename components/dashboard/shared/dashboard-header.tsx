import { LayoutDashboard } from "lucide-react"

import { ThemeToggle } from "./theme-toggle"

export function DashboardHeader() {
    return (
        <header className="border-b">
            <div className="flex h-20 md:h-28 items-center justify-between px-4 md:px-8 gap-4">

                <div className="flex flex-col min-w-0">
                    <div className="hidden sm:flex items-center gap-2 text-[10px] md:text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1">
                        <LayoutDashboard className="h-3 w-3" />
                        <span>Main</span>
                        <span className="opacity-40">/</span>
                        <span className="text-foreground">Users Management</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl md:text-4xl font-black tracking-tighter uppercase leading-none truncate">
                            Users Dashboard
                        </h1>

                        <LayoutDashboard className="hidden sm:block h-6 w-6 md:h-9 md:w-9 text-primary" strokeWidth={1.5} />
                    </div>
                </div>

                <div className="shrink-0">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}


