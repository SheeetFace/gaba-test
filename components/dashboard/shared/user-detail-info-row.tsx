import type { LucideIcon } from "lucide-react";

interface InfroRowProps {
    icon: LucideIcon;
    label: string;
    value: string | number;
}

export const InfoRow = ({ icon: Icon, label, value }: InfroRowProps) => (
    <div className="flex items-start gap-3 py-2">
        <div className="mt-1 bg-muted p-2 rounded-md">
            <Icon className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="min-w-0 flex-1">
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{label}</p>
            <p className="text-sm font-semibold break-all leading-tight">{value}</p>
        </div>
    </div>
);