"use client"

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

interface LogOutButtonProps {
  user: string
}

export function LogOutButton({ user }: LogOutButtonProps) {
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
