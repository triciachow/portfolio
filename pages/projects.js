import { createClient } from "contentful";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/projects/Header";
import WorkFlow from "../components/projects/WorkFlow";

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
	return (
		<>
			<Navbar />
			<Header />
			<WorkFlow />
		</>
	);
}
