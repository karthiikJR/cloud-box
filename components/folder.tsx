import React from "react";
import { Card } from "./ui/card";
import {
	EllipsisVerticalIcon,
	FolderIcon,
	HardDriveDownloadIcon,
	Trash2Icon,
	PenLineIcon,
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

function Folder({
	folderName,
	onDoubleClick,
}: {
	folderName: string;
	onDoubleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}) {
	return (
		<Card
			onClick={(e) => onDoubleClick(e)}
			className="w-56 h-12 flex items-center justify-between pl-4 pr-2 cursor-pointer select-none"
		>
			<FolderIcon color="gray" fill="gray" />
			<div className="text-sm text-nowrap overflow-hidden text-ellipsis w-[8rem]">
				{folderName}
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
		</Card>
	);
}

export default Folder;
