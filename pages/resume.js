import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FileDown } from "lucide-react";

export default function Resume() {
	return (
		<>
			<Navbar />
			<section className="min-w-full lg:px-[140px] md:px-10 px-5 py-5 flex flex-col items-center mb-[400px]">
				<a
					href="/Resume_Jan2023.pdf"
					download
					target="_blank"
					rel="noopener noreferrer"
					className="h-full w-full lg:max-w-[1160px] flex justify-center"
				>
					<div className="rounded-2xl bg-[#0E7490]/50 border border-teal-400 hover:bg-[#164E63] p-8 flex justify-center items-center gap-5 font-medium lg:text-xl transition-all ease-in-out">
						Download Tricia&apos;s resume here
					</div>
				</a>
			</section>
			<Footer />
		</>
	);
}
