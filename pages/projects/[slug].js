import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Keywords from "../../components/projects/Keywords";
import { Github, ExternalLink, MousePointer2 } from "lucide-react";
import Link from "next/link";
import { BLOCKS } from "@contentful/rich-text-types";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "portfolioProjects" });
  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "portfolioProjects",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const notFound = items[0] ? false : true;

  return {
    props: { project: items[0] },
    revalidate: 1,
    notFound,
  };
}

const renderOption = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <div className="w-full ">
          <Image
            src={`https:${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt="Project images"
          />
        </div>
      );
    },
  },
};

export default function ProjectDetails({ project }) {
  if (!project)
    return <div className="text-center mt-8">Fetching project details...</div>;

  const {
    featuredImage,
    keywords,
    title,
    description,
    fullDetails,
    githubLink,
    deployedLink,
  } = project.fields;

  return (
    <>
      <Navbar />
      <section className="min-w-full lg:px-[140px] md:px-10 px-5 py-5">
        {/* HEADER */}
        <div className="w-full items-center md:items-start lg:w-10/12 flex flex-col md:flex-row gap-10 bg-gray-800 p-10 rounded-2xl mx-auto mb-10">
          <div className="min-w-[300px]">
            <Image src="/test.png" width={300} height={300} className="" />
          </div>
          <div className="w-full min-h-full flex flex-col justify-between py-3">
            <div>
              <h4 className="text-xs text-[#7DD3FC] mb-3">Personal Project</h4>
              <h1 className="text-xl md:text-3xl lg:text-4xl leading-[60px] font-semibold mb-10">
                MyICA Portal
              </h1>
              <h2 className="text-gray-300 leading-8 mb-10">
                A re-design on the MyICA Portal on their mobile screens.
              </h2>
            </div>
            <div className="flex justify-self-end">
              <Link href="/">
                <a className="bg-gray-700 flex gap-x-3 px-5 py-2 rounded-lg drop-shadow-2xl">
                  <MousePointer2 /> View Prototype
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* START ARTICLE */}
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
          alt="Project image"
        />
        <div className="flex gap-x-2 flex-wrap mb-4">
          {keywords.map((keyword, index) => (
            <Keywords key={index} keyword={keyword} />
          ))}
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col unreset">
            {documentToReactComponents(fullDetails, renderOption)}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

{
  /* <div className="lg:w-8/12 xl:w-7/12 mx-auto pt-20 py-6 px-6 xl:px-24 ">
      <header className="bg-sky-100 py-6 px-4 my-6">
        <h1 className="text-center font-roboto uppercase xl:text-5xl text-3xl text-slate-900 tracking-wider">
          {title}
        </h1>
        <p className="text-slate-900 text-center my-4">{description}</p>
      </header>
      <Image
        src={`https:${featuredImage.fields.file.url}`}
        width={featuredImage.fields.file.details.image.width}
        height={featuredImage.fields.file.details.image.height}
        alt="Project image"
      />

      <div className="flex gap-x-2 flex-wrap mb-4">
        {keywords.map((keyword, index) => {
          return <Keywords key={index} keyword={keyword} />;
        })}
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col unreset">
          {documentToReactComponents(fullDetails, renderOption)}
        </div>
      </div>
      <div className="flex gap-x-8">
        {githubLink && (
          <Link href={githubLink}>
            <button className="my-8 flex justify-center items-center gap-x-2 border-2 border-slate-900 dark:border-slate-50 rounded-md px-4 py-2 font-bold hover:bg-slate-900 hover:text-slate-50 dark:hover:text-slate-900 dark:hover:bg-slate-50 transition ease-in-out">
              View on Github <Github />
            </button>
          </Link>
        )}

        {deployedLink && (
          <Link href={deployedLink}>
            <button className="my-8 flex justify-center items-center gap-x-2 border-2 border-slate-900 dark:border-slate-50 rounded-md px-4 py-2 font-bold hover:bg-slate-900 hover:text-slate-50 dark:hover:text-slate-900 dark:hover:bg-slate-50 transition ease-in-out">
              View live website <ExternalLink />
            </button>
          </Link>
        )}
      </div>
      <Footer />
    </div> */
}
