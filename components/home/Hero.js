import Image from "next/image";
import { FolderGit2, Mail, Scroll, ScrollText } from "lucide-react";
import Link from "next/link";

export default function Hero() {
	return (
		<>
			{/* HEORO SECTION */}
			<div className="min-w-full lg:px-[140px] md:px-10 px-5 py-5 mx-auto">
				{/* HORIZONTAL CONTAINER */}
				<div className="h-full flex lg:flex-row flex-col justify-center gap-10 pt-5 lg:pt-10 pb-5">
					{/* LEFT SIDE */}
					<div className="flex flex-col gap-y-10 w-full lg:w-[360px]">
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
					<div className="h-ful w-full lg:w-[760px] p-10 bg-gray-800 rounded-2xl flex flex-col items-center lg:flex-row gap-10">
						<div className="w-full lg:max-w-[380px] flex flex-col">
							<h3 className="font-roboto font-bold text-xs uppercase text-[#7DD3FC] mb-3">
								Hello there, I&apos;m Tricia
							</h3>
							<h1 className="font-semibold text-4xl leading-10 mb-10">
								A UI/UX Developer
							</h1>
							<p className="text-gray-300 leading-10">
								I craft meaningful digital experiences, with a passion to
								problem-solve and deliver user-friendly solutions. In addition,
								I bring prior experience working in marketing and communication
								to my work, which allows me to approach projects from a
								well-rounded perspective.
							</p>
						</div>
						<div className="bg-[url(/tricia.jpeg')] bg-center bg-cover w-full md:w-[260px] h-[396px] rounded-2xl">
							<Image
								src="/tricia.jpeg"
								alt="Tricia"
								width={260}
								height={396}
								className="rounded-2xl"
							/>
						</div>
					</div>
				</div>
			</div>
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
