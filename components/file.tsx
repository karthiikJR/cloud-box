import React from "react";
import { Card } from "./ui/card";
import {
	EllipsisVerticalIcon,
	HardDriveDownloadIcon,
	Trash2Icon,
	PenLineIcon,
	ImageIcon,
	FileSlidersIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

function File({ fileName, type }: { fileName: string; type: "img" | "pdf" }) {
	return (
		<Card className="w-56 h-full pb-2 px-2 cursor-pointer select-none bg-primary/5">
			<div className="w-full flex items-center justify-between py-2">
				{type === "img" ? (
					<ImageIcon className="w-5 h-5 text-blue-500" />
				) : (
					<FileSlidersIcon className="w-5 h-5 text-red-500" />
				)}
				<div className="text-sm text-nowrap overflow-hidden text-ellipsis w-[8rem]">
					{fileName}
				</div>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant={"ghost"} className="rounded-full" size={"icon"}>
							<EllipsisVerticalIcon />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56" sideOffset={10} align="start">
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<PenLineIcon />
								<span>Rename</span>
								<DropdownMenuShortcut>Ctrl+Alt+E</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<HardDriveDownloadIcon />
								<span>Download</span>
								<DropdownMenuShortcut>Ctrl+D</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<Trash2Icon />
								<span>Delete</span>
								<DropdownMenuShortcut>Del</DropdownMenuShortcut>
							</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<div className="w-full aspect-square rounded-md overflow-hidden">
				<Image
					src="/logo.png"
					alt=""
					className="w-full h-full object-cover"
					width={1000}
					height={1000}
				/>
			</div>
		</Card>
	);
}

export default File;
