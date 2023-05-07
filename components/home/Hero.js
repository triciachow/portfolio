import Image from "next/image";
import { FolderGit2, Mail, Scroll, ScrollText } from "lucide-react";
import Link from "next/link";

export default function Hero() {
	return (
		<>
			{/* HEORO SECTION */}
			<main className="mx-auto">
				<div className="min-w-full lg:px-[140px] md:px-10 px-5 py-5">
					{/* HORIZONTAL CONTAINER */}
					<div className="flex lg:flex-row flex-col justify-center gap-10 pt-20 pb-5">
						{/* LEFT SIDE */}
						<div className="flex flex-col gap-y-10 w-full lg:w-[360px]">
							<div className="">
								<Link href="/">
									<a>
										<Image
											src="/tricia-main.svg"
											alt="Home button"
											width={360}
											height={204}
											className="rounded-2xl"
										/>
									</a>
								</Link>
							</div>
							{/* MENU */}
							<ul className="h-full flex flex-col p-5 justify-center items-center rounded-2xl bg-gray-800">
								{navLinks.map((link) => (
									<li key={link.id} className="w-full">
										<Link href={link.href}>
											<a className="flex gap-x-8 font-medium leading-6 p-5 rounded-2xl w-full hover:bg-gray-700 hover:cursor-pointer hover:rounded-lg">
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
						<div className="w-full lg:w-[760px] p-10 bg-gray-800 rounded-2xl flex gap-x-10">
							<div className="h-full">
								<Image
									src="/tricia-main.svg"
									alt="Home button"
									width={260}
									height={396}
									className="rounded-2xl"
								/>
							</div>
							<div className="flex flex-col">
								<h3 className="font-roboto font-bold text-xs uppercase text-[#7DD3FC] mb-3">
									Hello there, I'm Tricia
								</h3>
								<h1 className="font-semibold text-4xl leading-10 mb-10">
									A UI/UX developer
								</h1>
								<p className="text-gray-300 leading-10">
									I craft meaningful digital experiences, with a passion to
									problem-solve and deliver user-friendly solutions.
									Additionally, I have previous experiences working in marketing
									and communications.
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
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
