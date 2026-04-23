"use client"

import { Button } from "@/components/ui/button"

import type { Table } from "@tanstack/react-table"

interface TablePaginationProps<TData> {
  table: Table<TData>
}

export function TablePagination<TData>({ table }: TablePaginationProps<TData>) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 px-2">

      <div className="text-sm text-muted-foreground">
        Total {table.getFilteredRowModel().rows.length} users
      </div>

      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>


        <div className="flex items-center gap-1">
          {table.getPageOptions().map((pageIndex) => (
            <Button
              key={pageIndex}
              variant={table.getState().pagination.pageIndex === pageIndex ? "default" : "outline"}
              className="w-8 h-6"
              onClick={() => table.setPageIndex(pageIndex)}
            >
              {pageIndex + 1}
            </Button>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
