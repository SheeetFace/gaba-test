import { useState } from "react"
import { 
  useReactTable, 
  getCoreRowModel, 
  getSortedRowModel, 
  getFilteredRowModel, 
  getPaginationRowModel,
  SortingState
} from "@tanstack/react-table"

import { columns } from "@/components/dashboard/user-table/user-table-columns"

import type { IUser } from "@/types/user"

export function useUserTable(data: IUser[]) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [globalFilter, setGlobalFilter] = useState("")

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: (row, _, filterValue) => {
      const fullName = `${row.original.firstName} ${row.original.lastName}`.toLowerCase()
      return fullName.includes(filterValue.toLowerCase())
    },
    initialState: {
      pagination: { pageSize: 15 },
    },
  })

  return { table, globalFilter, setGlobalFilter }
}
