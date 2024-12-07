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
			<section className="container mx-auto">{children}</section>
		</>
	);
}
