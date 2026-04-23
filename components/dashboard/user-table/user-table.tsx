"use client"

import { useState } from "react"

import { flexRender } from "@tanstack/react-table"

import { useUserTable } from "@/hooks/use-user-table"

import { TableSearch } from "../shared/table-search"
import { TablePagination } from "../shared/table-pagination"
import { UserDetailSheet } from "../user-detail/user-detail-sheet"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import type { IUser } from "@/types/user"


export function UserTable({ users }: { users: IUser[] }) {

  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

  const { table, globalFilter, setGlobalFilter } = useUserTable(users);

  return (
    <div className="flex w-full h-[calc(100vh-100px)] overflow-hidden">
      {/* <div className="p-4 space-y-4"> */}
      <div className="flex-1 flex flex-col min-w-0 p-4 space-y-4 overflow-auto">

        <TableSearch value={globalFilter} onChange={setGlobalFilter} />

        <div className="rounded-md border bg-card overflow-hidden">
          <Table className="table-fixed w-full">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className="px-4"
                      style={{ width: `${header.getSize()}px` }}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>

            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => setSelectedUser(row.original)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="px-4 py-3">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <TablePagination table={table} />

      </div>

      <UserDetailSheet
        user={selectedUser}
        isOpen={!!selectedUser}
        onClose={() => setSelectedUser(null)}
      />
      
    </div>
  )
}
