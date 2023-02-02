import Image from "next/image";
import { createClient } from "contentful";

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
    <main className="h-full">
      <header className="my-12 flex flex-col gap-y-2 w-full">
        <h1 className="uppercase text-[64px] font-roboto">
          Hello, I&apos;m Tricia
        </h1>
        <p className="font-semibold text-2xl">
          Crafting seamless digital experiences through skilled web development
          and intuitive UI/UX design.
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
    </main>
  );
}
