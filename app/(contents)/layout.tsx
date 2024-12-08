import Section from "@/components/context-section";
import Navbar from "@/components/nav-bar";
import React from "react";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navbar />
			<Section>
				<div className="container mx-auto">{children}</div>
			</Section>
		</>
	);
}
