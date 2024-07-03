import Image from "next/image";
import { FolderGit2, Mail, Scroll, ScrollText } from "lucide-react";
import Link from "next/link";
import Intro from "./Intro";

export default function Hero() {
	return (
		<>
			{/* HEORO SECTION */}
			<div className="min-w-full lg:px-[100px] md:px-10 px-5 py-5 mx-auto">
				{/* HORIZONTAL CONTAINER */}
				<div className="h-full flex lg:flex-row flex-col justify-center gap-10 pt-5 lg:pt-10 pb-5">
					{/* LEFT SIDE */}
					<div className="flex flex-col gap-y-10 w-full lg:w-[300px]">
						<Link href="/">
							<a>
								<div className="w-full bg-tech bg-cover bg-center min-h-[204px] rounded-2xl">
									<div className="bg-gray-900/30 backdrop-brightness-75 w-full min-h-[204px] flex justify-center items-center rounded-2xl">
										<Image
											src="/logo.svg"
											alt="Tricia logo"
											width={200}
											height={50}
										/>
									</div>
								</div>
							</a>
						</Link>

						{/* MENU */}
						<ul className="h-full flex flex-col p-5 justify-center items-center rounded-2xl bg-gray-800">
							{navLinks.map((link) => (
								<li key={link.id} className="w-full">
									<Link href={link.href}>
										<a className="flex gap-x-8 font-medium leading-6 p-5 rounded-2xl w-full hover:bg-gray-700 hover:cursor-pointer hover:rounded-lg transition-all ease-in-out">
											<Image
												src={link.icon}
												alt={link.alt}
												width={link.width}
												height={link.height}
											/>{" "}
											{link.name}
										</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
					{/* RIGHT SIDE */}
					<div className="min-h-full w-full lg:w-[800px] lg:p-10 p-6 bg-gray-800 rounded-2xl flex flex-col items-start justify-between gap-10">
						<div className="w-full flex flex-col md:flex-row justify-center md:justify-between gap-4">
							<div className="lg:max-w-[450px] w-full">
								<h3 className="font-roboto font-bold text-xs uppercase text-[#7DD3FC] mb-3">
									Hello there,
								</h3>
								<h1 className="font-semibold text-4xl leading-10 mb-10">
									I&apos;m Tricia
								</h1>
								<p className="text-gray-300 leading-10">
									They say the best bridges are built by those who understand
									both sides. That&apos;s my approach to UI/UX design. With a
									background in computer science, I bridge the gap between
									technical functionality and user needs. My passion lies in
									crafting digital experiences that are meaningful, to deliver
									user-friendly solutions that resonate on a deeper level.
								</p>
							</div>
							<div className="bg-[url(/tricia.jpeg')] bg-center bg-cover w-full md:w-[189px] h-[288px] rounded-2xl flex items-center md:hidden lg:block">
								<Image
									src="/tricia.jpeg"
									alt="Tricia"
									width={189}
									height={288}
									className="rounded-2xl"
								/>
							</div>
						</div>

						{/* EMPLOYMENT */}
						<div className="flex md:flex-row items-start w-full gap-4">
							<Image
								src="/wizlah-logo.svg"
								alt="Tricia"
								width={60}
								height={60}
							/>
							<div className="w-full">
								<div className="flex flex-col md:flex-row justify-between">
									<h3 className="font-roboto font-bold text-xs uppercase text-[#7DD3FC]">
										Current employment
									</h3>
									<div className="w-[120px] md:w-auto bg-gray-900 text-green-400 px-2 py-1 my-2 md:my-0 rounded text-center text-xs">
										Jul 23 - Current
									</div>
								</div>
								<h2 className="font-semibold leading-6 text-xl mb-3">
									UX Designer, Wizlah
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <Intro /> */}
		</>
	);
}

const navLinks = [
	{
		id: 1,
		icon: "/project.svg",
		alt: "Project icon",
		width: 24,
		height: 24,
		href: "/projects",
		name: "Projects",
	},
	{
		id: 2,
		icon: "/resume.svg",
		alt: "Resume icon",
		width: 24,
		height: 24,
		href: "/resume",
		name: "Resume",
	},
	{
		id: 3,
		icon: "/contact.svg",
		alt: "contact icon",
		width: 24,
		height: 24,
		href: "/contact",
		name: "Contact",
	},
];
