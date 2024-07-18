'use client'

import { CreateProject } from "@/app/ui/project/buttons"
import  Table from "@/app/ui/project/table"

export default function DashboardPage() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-5xl font-bold">PROJETS</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <CreateProject />
      </div>
        <Table />
    </div>
  )
}
