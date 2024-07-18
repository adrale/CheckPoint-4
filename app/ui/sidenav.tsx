import Link from "next/link";
import DashboardLogo from "./dashboard-logo";

export default function Sidenav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-gray-50 p-2 md:pt-0">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <DashboardLogo />
        </div>
      </Link>
    </div>
  )
}
