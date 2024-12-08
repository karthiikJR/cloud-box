"use client";
import React from "react";
import ContextMenu from "./ui/context-menu";

const initialContextState = {
	x: 0,
	y: 0,
	show: false,
};

function Section({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [contextState, setContextState] = React.useState(initialContextState);

	const handleContextMenu = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		e.preventDefault();

		const { pageX, pageY } = e;
		setContextState({ x: pageX, y: pageY, show: true });
	};

	const closeContextMenu = () => {
		setContextState((prev) => ({ ...prev, show: false }));
	};

	return (
		<section
			onContextMenu={handleContextMenu}
			className="relative z-10 min-h-screen pt-20"
		>
			{contextState.show && (
				<ContextMenu {...contextState} onClose={closeContextMenu} />
			)}
			{children}
		</section>
	);
}

export default Section;
