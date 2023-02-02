import { createClient } from "contentful";
import Image from "next/image";
import Footer from "../components/Footer";

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
    <div className="min-w-full min-h-screen pt-10 px-6 xl:px-24 bg-circles bg-no-repeat bg-top bg-cover">
      <header className="py-8 flex flex-col gap-y-2 w-full ">
        <h1 className="uppercase text-[64px] font-roboto">Projects</h1>
        <p>
          Web development and UI/UX design go hand in hand in creating effective
          and user-friendly websites and applications.
        </p>
        <p>Typically, my project work flow would look something like this:</p>
        <p className="mt-4 mb-2 font-semibold">
          Research and Analysis &gt; Wireframing and Prototyping &gt; UI Design
          &gt; Web Development &gt; Testing and Refinement &gt; Deployment
        </p>
      </header>
      <section className="mb-8">
        <h2 className="uppercase font-roboto mb-2">Featured Projects</h2>
        <div className="flex flex-wrap gap-4">
          {projects.map(
            item =>
              item.fields.featured && (
                <a href={`/projects/${item.fields.slug}`} key={item.sys.id}>
                  <Image
                    src={`https:${item.fields.thumbnail?.fields?.file?.url}`}
                    width="339px"
                    height="199px"
                    className="cursor-pointer"
                    alt="Project cover"
                  />
                </a>
              )
          )}
        </div>
      </section>
      <section>
        <h2 className="uppercase font-roboto mb-2">Other Projects</h2>
        <div className="flex flex-wrap gap-4">
          {projects.map(item =>
            item.fields.featured == false ? (
              <a href={`/projects/${item.fields.slug}`} key={item.sys.id}>
                <Image
                  src={`https:${item.fields.thumbnail?.fields?.file?.url}`}
                  width="339px"
                  height="199px"
                  className="cursor-pointer"
                  alt="Project cover"
                />
              </a>
            ) : (
              ""
            )
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
