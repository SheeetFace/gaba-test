"use client"

import { ColumnDef } from "@tanstack/react-table"

import { UserAvatar } from "../shared/user-avatar"
import { SortableHeader } from "../shared/sortable-header"

import { Badge } from "@/components/ui/badge"

import { getRoleStyles } from "@/lib/utils"

import type { IUser } from "@/types/user"


export const columns: ColumnDef<IUser>[] = [
    {
        accessorKey: "firstName",
        header: ({ column }) => <SortableHeader column={column} title="User" />,
        size: 250,
        cell: ({ row }) => (
            <div className="flex items-center gap-3">
                <UserAvatar
                    image={row.original.image}
                    firstName={row.original.firstName}
                    lastName={row.original.lastName}
                />
                <div className="flex flex-col min-w-0">
                    <span className="font-medium truncate leading-none">
                        {row.original.firstName} {row.original.lastName}
                    </span>
                    <span className="text-xs text-muted-foreground truncate mt-1">
                        @{row.original.username}
                    </span>
                </div>
            </div>
        ),
    },

    {
        accessorKey: "email",
        header: ({ column }) => <SortableHeader column={column} title="Email" />,
        size: 220,
        cell: ({ row }) => <span className="truncate block text-muted-foreground">{row.getValue("email")}</span>
    },
    {
        accessorKey: "age",
        header: ({ column }) => <SortableHeader column={column} title="Age" />,
        size: 80,
    },
    {
        accessorKey: "role",
        header: ({ column }) => <SortableHeader column={column} title="Role" />,
        size: 120,
        cell: ({ row }) => {
            const role = row.getValue("role") as string
            return (
                <Badge variant="outline" className={`capitalize font-medium ${getRoleStyles(role)}`}>
                    {role}
                </Badge>
            )
        }
    },
    {
        accessorKey: "company.department",
        header: ({ column }) => <SortableHeader column={column} title="Department" />,
        size: 180,
        cell: ({ row }) => (
            <span className="text-muted-foreground truncate block" title={row.original.company.department}>
                {row.original.company.department}
            </span>
        ),
    },
]
