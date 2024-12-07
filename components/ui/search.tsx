import { cn } from "@/lib/utils";
import { FolderSearchIcon } from "lucide-react";
import * as React from "react";
import { Input } from "./input";

export type SearchProps = React.InputHTMLAttributes<HTMLInputElement>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	icon?: React.ReactNode;
}
const Search = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				className={cn(
					"flex h-10 items-center rounded-md border border-input bg-white dark:bg-background pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2",
					className
				)}
			>
				<FolderSearchIcon className="h-[16px] w-[16px]" />
				<Input
					{...props}
					type="search"
					ref={ref}
					className="border-none w-full focus-visible:ring-0 focus-visible:ring-offset-0"
				/>
			</div>
		);
	}
);

Search.displayName = "Search";

export { Search };
