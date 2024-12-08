import React from "react";
import {
	Cloud,
	FileUpIcon,
	Github,
	Keyboard,
	LifeBuoy,
	LogOut,
	Mail,
	MessageSquare,
	Plus,
	PlusCircle,
	FolderUpIcon,
	FolderPlusIcon,
	UserPlus,
	Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";

function ContextMenu({
	x,
	y,
	show,
	onClose,
}: Readonly<{
	x: number;
	y: number;
	show: boolean;
	onClose: () => void;
}>) {
	return (
		<DropdownMenu open={show} onOpenChange={onClose}>
			<DropdownMenuContent
				style={{
					position: "absolute",
					top: y,
					left: x,
				}}
				className="w-56 z-50"
			>
				<DropdownMenuLabel>Menu</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<FolderPlusIcon />
						<span>Create Folder</span>
						<DropdownMenuShortcut>Ctrl+N</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<FileUpIcon />
						<span>Upload File</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<FolderUpIcon />
						<span>Upload Folder</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default ContextMenu;
