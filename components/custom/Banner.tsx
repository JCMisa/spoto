import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";

const Banner = () => {
  return (
    <div className="w-full mx-auto bg-dark-800 text-white">
      <div className="flex items-center justify-between px-8 py-4">
        <header>
          <Link href={"/"} className="flex items-center gap-1">
            <Image
              src={"/logo.svg"}
              alt="logo"
              width={1000}
              height={1000}
              className="w-10 h-10"
            />
            <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">
              Spoto
            </h1>
          </Link>
        </header>
        <div>
          <div className="sm:hidden flex space-x-2 items-baseline">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MenuIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Sign in</DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/mybookings"}>My Bookings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/dashboard"}>Admin</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            Sign in Sign out
          </div>

          <div className="hidden sm:flex gap-x-4 items-center">
            <Link href={"/mybookings"}>My Bookings</Link>
            <Link href={"/dashboard"}>Admin</Link>
            Sign in Sign out
          </div>
        </div>
      </div>

      <div className="bg-dark-800 w-full h-20"></div>
    </div>
  );
};

export default Banner;
