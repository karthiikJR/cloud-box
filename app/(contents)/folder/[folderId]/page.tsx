"use client";

import React from "react";
import { useParams } from "next/navigation";
import File from "@/components/file";
import Folder from "@/components/folder";

function page() {
	const pathname = useParams();
	const folderNames = [
		{
			id: 1,
			type: "folder",
			name: "Documents",
		},
		{
			id: 2,
			type: "folder",
			name: "Admission / Application",
		},
		{
			id: 3,
			type: "folder",
			name: "Assignments",
		},
		{
			id: 4,
			type: "pdf",
			name: "Projects.pdf",
		},
		{
			id: 5,
			type: "img",
			name: "Logo.png",
		},
		{
			id: 6,
			type: "img",
			name: "Profile.png",
		},
	];

	return (
		<div>
			<div>
				<p className="text-sm py-4">Folders</p>
				<div className="flex gap-4 flex-wrap">
					{folderNames.map((folder) =>
						folder.type === "folder" ? (
							<Folder
								key={folder.id}
								folderName={folder.name}
								onDoubleClick={() => {}}
							/>
						) : null
					)}
				</div>
			</div>
			<div>
				<p className="text-sm py-4">Files</p>
				<div className="flex gap-4 flex-wrap">
					{folderNames.map((folder) =>
						folder.type !== "folder" ? (
							<File
								type={folder.type === "pdf" ? "pdf" : "img"}
								key={folder.id}
								fileName={folder.name}
							/>
						) : null
					)}
				</div>
			</div>
		</div>
	);
}

export default page;
