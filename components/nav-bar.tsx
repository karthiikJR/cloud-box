import Image from "next/image";
import React from "react";
import { UserIcon, SquareArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Search } from "./ui/search";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./toggle-mode";

function Navbar() {
	return (
		<header className="border-b-2">
			<nav className="p-4 flex items-center justify-between">
				<div className="flex sm:flex-row flex-col justify-center items-center gap-2">
					<Image
						src="/logo-no-bg.png"
						alt=""
						className="w-8 h-8 rounded-full"
						width={100}
						height={100}
					/>
					<h2 className="text-sm font-bold text-gray-600 dark:text-gray-200">
						Cloud Box
					</h2>
				</div>
				<Search
					className="rounded-full sm:w-96 overflow-hidden"
					placeholder="Search..."
				/>
				<div className="flex sm:gap-2 flex-col sm:flex-row">
					<ModeToggle />
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button className="rounded-full" size={"icon"}>
								<UserIcon />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<SquareArrowRightIcon />
								Logout
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
