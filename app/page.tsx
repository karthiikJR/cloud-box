import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<>
			{/* Hero */}
			<div className="relative overflow-hidden py-24 lg:py-32">
				<div className="relative z-10">
					<div className="container py-10 lg:py-16 mx-auto">
						<div className="max-w-2xl text-center mx-auto">
							<p className="inline-flex items-center gap-x-2 border text-sm p-1 px-3 rounded-full transition">
								Save your files
							</p>
							{/* Title */}
							<div className="mt-5 max-w-2xl">
								<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
									Cloud Box
								</h1>
							</div>
							{/* End Title */}
							<div className="mt-5 max-w-3xl">
								<p className="text-xl text-muted-foreground">
									Store your files in the cloud. Access them from anywhere using
									any device. Share them with anyone.
								</p>
							</div>
							{/* Buttons */}
							<div className="mt-8 gap-3 flex justify-center">
								<Button size={"lg"} asChild>
									<Link href="login">Get Started</Link>
								</Button>
							</div>
							{/* End Buttons */}
						</div>
					</div>
				</div>
			</div>
			{/* End Hero */}
		</>
	);
}
