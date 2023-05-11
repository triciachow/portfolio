import { createClient } from "contentful";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/projects/Header";
import WorkFlow from "../components/projects/WorkFlow";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	});

	const res = await client.getEntries({ content_type: "portfolioProjects" });

	return {
		props: {
			projects: res.items,
		},
		revalidate: 1,
	};
}

export default function ProjectsPage({ projects }) {
	const [visible, setVisible] = useState(true);

	const handleScroll = () => {
		if (window.scrollY > 300) {
			setVisible(true);
			console.log("more than 300");
		} else {
			setVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{visible ? (
				<div className={`w-full fixed z-50 backdrop-blur-xl bg-gray-900/2`}>
					<Navbar />
				</div>
			) : (
				""
			)}
			<Navbar />
			<Header />
			<WorkFlow />

			<section className="min-w-full lg:px-[140px] md:px-10 px-5 py-5 flex flex-col items-center">
				<h2 className="w-full lg:max-w-[1160px] uppercase font-roboto font-bold text-2xl justify-start mb-10">
					Checkout My Projects:
				</h2>
				<div className="grid grid-cols-2 gap-5 lg:gap-10 w-full lg:max-w-[1160px]">
					<div>
						<Image
							src="/test.png"
							alt="Project cover"
							width={560}
							height={560}
							className="rounded-2xl w-[560px]"
						/>
					</div>
					<div>
						<Image
							src="/test.png"
							alt="Project cover"
							width={560}
							height={560}
							className="rounded-2xl w-[560px]"
						/>
					</div>
					<div>
						<Image
							src="/test.png"
							alt="Project cover"
							width={560}
							height={560}
							className="rounded-2xl w-[560px]"
						/>
					</div>
					<div>
						<Image
							src="/test.png"
							alt="Project cover"
							width={560}
							height={560}
							className="rounded-2xl w-[560px]"
						/>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
