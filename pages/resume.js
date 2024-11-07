import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FileDown } from "lucide-react";

export default function Resume() {
	return (
		<>
			<Navbar />
			<section className="min-w-full lg:px-[100px] md:px-10 px-5 py-5 flex flex-col items-center mb-[400px]">
				<a
					href="/Resume-Oct-2024.pdf"
					download
					target="_blank"
					rel="noopener noreferrer"
					// className="h-full w-full lg:max-w-[1160px] flex justify-center"
				>
					<div className="min-w-full rounded-2xl bg-[#0E7490]/50 border border-teal-400 hover:bg-[#164E63] p-8 font-medium text-center lg:text-xl transition-all ease-in-out">
						Download Tricia&apos;s resume here
					</div>
				</a>

				{/* <div className="h-full w-full lg:max-w-[1160px] flex justify-center">
					<div className="rounded-2xl bg-[#0E7490]/50 border border-teal-400 p-8 flex justify-center items-center gap-5 font-medium lg:text-xl transition-all ease-in-out">
						Available to download soon
					</div>
				</div> */}
			</section>
			<Footer />
		</>
	);
}
