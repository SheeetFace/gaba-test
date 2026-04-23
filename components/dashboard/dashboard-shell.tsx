"use client"

import { useQuery } from "@tanstack/react-query"

import { UserTable } from "./user-table/user-table"
import { StatsCards } from "./stats-cards"
import { DashboardError } from "./shared/dashboard-error"
import { DashboardLoader } from "./shared/dashboard-loader"

import { fetchUsers } from "@/services/user-service"

import type { IUserResponse } from "@/types/user"

export function DashboardShell() {
  const { data, isLoading, isError, error, refetch } = useQuery<IUserResponse>({
    queryKey: ["users"],
    retry: 1,
    queryFn: fetchUsers,
    staleTime: 0,
  })

  if (isLoading) return <DashboardLoader />

  return (
    <div className="space-y-6 relative min-h-[600px] animate-in fade-in duration-500">

      {isError && ( <DashboardError message={error?.message} onRetry={() => refetch()} /> )}

      <div className={isError ? "pointer-events-none select-none opacity-40 blur-[4px]" : "transition-all duration-300"}>
        <StatsCards total={data?.total ?? 0} users={data?.users ?? []} />

        <div className="rounded-xl border bg-card mt-6 shadow-sm overflow-hidden">
          <UserTable users={data?.users ?? []} />
        </div>
      </div>
    </div>
  );
}
