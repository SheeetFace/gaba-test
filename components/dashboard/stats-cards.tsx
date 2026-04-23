import { Users, ShieldCheck, Calendar, TrendingUp } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import type { IUser } from "@/types/user"

interface StatsCardsProps {
  total: number
  users: IUser[]
}

export function StatsCards({ total, users }: StatsCardsProps) {

  const avgAge = users.length > 0 ? Math.round(users.reduce((acc, user) => acc + user.age, 0) / users.length) : 0;
  
  const admins = users.filter(u => u.role === 'admin').length;

  const stats = [
    {
      title: "Total Users",
      value: total,
      icon: Users,
      description: "Active accounts",
      color: "text-blue-600",
      bgColor: "bg-blue-500/10",
      trend: "+12%"
    },
    {
      title: "Average Age",
      value: avgAge,
      icon: Calendar,
      description: "User maturity",
      color: "text-orange-600",
      bgColor: "bg-orange-500/10",
      trend: "Stable"
    },
    {
      title: "Administrators",
      value: admins,
      icon: ShieldCheck,
      description: "System access",
      color: "text-red-600",
      bgColor: "bg-red-500/10",
      trend: "Security"
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.title} className="relative overflow-hidden border-none shadow-md bg-card hover:shadow-lg transition-all group">
          <div className={`absolute -right-4 -top-4 h-24 w-24 rounded-full ${stat.bgColor} blur-2xl transition-opacity group-hover:opacity-100 opacity-50`} />
          
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 relative">
            <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-xl ${stat.bgColor}`}>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </div>
          </CardHeader>
          
          <CardContent className="relative">
            <div className="flex items-baseline gap-2">
              <div className="text-3xl font-black tracking-tight">{stat.value}</div>
              <div className="flex items-center text-[10px] font-bold text-emerald-500">
                <TrendingUp className="h-3 w-3 mr-0.5" />
                {stat.trend}
              </div>
            </div>
            <p className="text-[11px] text-muted-foreground mt-1 font-medium italic">
              {stat.description}
            </p>
          </CardContent>

          <div className={`absolute bottom-0 left-0 h-1 w-full ${stat.color} opacity-20`} />
        </Card>
      ))}
    </div>
  )

}
