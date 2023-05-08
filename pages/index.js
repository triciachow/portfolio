import { createClient } from "contentful";
import Footer from "../components/Footer";
import Hero from "../components/home/Hero";
import Intro from "../components/home/Intro";
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

export default function Home({ projects }) {
  return (
    <>
      <Hero />
      <Intro />
      {/* PROJECTS */}
      <section className="mx-auto">
        <div className="min-w-full lg:px-[140px] md:px-10 px-5 py-5 flex flex-col items-center">
          <h2 className="w-full lg:max-w-[1160px] uppercase font-roboto font-bold text-2xl justify-start mb-10">
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
        </div>
      </section>
      <Footer />
    </>
  );
}
