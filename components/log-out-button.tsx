import { headers } from "next/headers"
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut } from "lucide-react"
import Link from "next/link"

export default async function LogOutButton() {
  const headersList = await headers()
  const header = headersList.get('X-MS-CLIENT-PRINCIPAL')
  const user = header ? JSON.parse(Buffer.from(header, 'base64').toString('ascii')).userDetails : "PLACEHOLDER"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>{user}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <Link href="/.auth/logout">
          <DropdownMenuItem className="cursor-pointer">
            <LogOut />
            <span>Log out</span>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
