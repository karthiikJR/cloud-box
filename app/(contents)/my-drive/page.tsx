"use client";
import Folder from "@/components/folder";
import { useRouter } from "next/navigation";
import React from "react";

function page() {
	const router = useRouter();
	const handleSingleClick = (
		e: React.MouseEvent<HTMLDivElement>,
		folderId: number
	) => {
		switch (e.detail) {
			case 2: {
				router.push("folders/" + folderId);
				break;
			}
			default: {
			}
		}
	};

	const folderNames = [
		{
			id: 1,
			name: "Documents",
		},
		{
			id: 2,
			name: "Admission / Application",
		},
		{
			id: 3,
			name: "Assignments",
		},
		{
			id: 4,
			name: "Projects",
		},
	];

	return (
		<div className="flex gap-4 py-4 flex-wrap">
			{folderNames.map((folder) => (
				<Folder
					onDoubleClick={(e: React.MouseEvent<HTMLDivElement>) =>
						handleSingleClick(e, folder.id)
					}
					key={folder.id}
					folderName={folder.name}
				/>
			))}
		</div>
	);
}

export default page;
