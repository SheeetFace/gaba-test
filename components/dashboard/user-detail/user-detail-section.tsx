import type { LucideIcon } from "lucide-react";

interface DetailSectionProps {
  icon?: LucideIcon,
  title: string,
  children: React.ReactNode,
  badge?: React.ReactNode
}

export const DetailSection = ({ icon: Icon, title, children, badge }: DetailSectionProps) => (
  <section className="space-y-3">
    <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-tight text-sm">
      {Icon ? <Icon className="h-4 w-4" /> : badge}
      <h4>{title}</h4>
    </div>
    {children}
  </section>
);
