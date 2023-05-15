import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Keywords from "../../components/projects/Keywords";
import { Github, ExternalLink, MousePointer2 } from "lucide-react";
import Link from "next/link";
import { BLOCKS } from "@contentful/rich-text-types";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import React, { useState, useEffect } from "react";

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
	const res = await client.getEntries({ content_type: "portfolioProjects" });
	const paths = res.items.map((item) => {
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
		[BLOCKS.EMBEDDED_ASSET]: (node) => {
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
	const [visible, setVisible] = useState(true);

	const handleScroll = () => {
		if (window.scrollY > 500) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	if (!project)
		return <div className="text-center mt-8">Fetching project details...</div>;

	const {
		thumbnail,
		featuredImage,
		keywords,
		title,
		description,
		fullDetails,
		githubLink,
		deployedLink,
		projectType,
		figmaLink,
	} = project.fields;

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
			<section className="mx-auto lg:px-[140px] md:px-10 px-5 py-5">
				{/* HEADER */}
				<div className="lg:max-w-[1160px] w-full items-center md:items-start flex flex-col md:flex-row gap-10 bg-gray-800 p-10 rounded-2xl mx-auto mb-10">
					<div className="min-w-[300px]">
						<Image
							src={`https:${thumbnail.fields.file.url}`}
							width={thumbnail.fields.file.details.image.width}
							height={thumbnail.fields.file.details.image.height}
							alt="Cover image"
						/>
					</div>
					<div className="w-full min-h-full flex flex-col justify-between py-3">
						<div>
							<h4 className="text-xs text-[#7DD3FC] mb-3 uppercase">
								{projectType}
							</h4>
							<h1 className="text-xl md:text-3xl lg:text-4xl leading-[60px] font-semibold mb-4 lg:mb-10">
								{title}
							</h1>
							<h2 className="text-gray-300 text-xlfont-medium mb-10">
								{description}
							</h2>
						</div>
						<div className="flex flex-col gap-5">
							{figmaLink && (
								<div className="flex justify-self-end">
									<Link href={figmaLink}>
										<a className="bg-gray-700 flex gap-x-3 px-5 py-2 rounded-lg drop-shadow-sm hover:drop-shadow-2xl">
											<MousePointer2 /> View Prototype
										</a>
									</Link>
								</div>
							)}
							{githubLink && (
								<div className="flex justify-self-end">
									<Link href={githubLink}>
										<a className="bg-gray-700 flex gap-x-3 px-5 py-2 rounded-lg drop-shadow-sm hover:drop-shadow-2xl">
											<Github /> View on Github
										</a>
									</Link>
								</div>
							)}

							{deployedLink && (
								<div className="flex justify-self-end">
									<Link href={deployedLink}>
										<a className="bg-gray-700 flex gap-x-3 px-5 py-2 rounded-lg drop-shadow-sm hover:drop-shadow-2xl">
											<ExternalLink /> View live website
										</a>
									</Link>
								</div>
							)}
						</div>
					</div>
				</div>

				{/* START ARTICLE */}
				<div className="mx-auto w-full lg:max-w-[960px]">
					<div className="w-full mx-auto flex justify-center">
						<Image
							src={`https:${featuredImage.fields.file.url}`}
							// width={960}
							// height={630}
							width={featuredImage.fields.file.details.image.width}
							height={featuredImage.fields.file.details.image.height}
							alt="Project image"
						/>
					</div>
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
