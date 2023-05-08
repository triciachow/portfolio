import { createClient } from "contentful";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/projects/Header";
import WorkFlow from "../components/projects/WorkFlow";
import Image from "next/image";

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
      <section className="min-w-full lg:px-[140px] md:px-10 px-5 py-5 flex flex-col items-center">
        <h2 className="w-full lg:w-10/12 uppercase font-roboto font-bold text-2xl justify-start mb-10">
          Checkout My Projects:
        </h2>
        <div className="grid grid-cols-2  gap-10">
          <Image
            src="/test.png"
            alt="Project cover"
            width={560}
            height={560}
            className="rounded-2xl"
          />
          <Image
            src="/test.png"
            alt="Project cover"
            width={560}
            height={560}
            className="rounded-2xl"
          />
          <Image
            src="/test.png"
            alt="Project cover"
            width={560}
            height={560}
            className="rounded-2xl"
          />
          <Image
            src="/test.png"
            alt="Project cover"
            width={560}
            height={560}
            className="rounded-2xl"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
