export default function Intro() {
	return (
		<>
			<section className="mx-auto">
				<div className="min-w-full lg:px-[140px] md:px-10 px-5 py-5 flex flex-col items-center">
					<h2 className="w-full lg:max-w-[1160px] uppercase font-roboto font-bold text-3xl justify-start mb-10">
						What's Keeping Me Busy, Here's The Scoop:
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
						{introData.map((intro) => (
							<div
								key={intro.id}
								className="w-full min-h-full lg:max-w-[360px] bg-gray-800 p-10 rounded-2xl"
							>
								<h3 className="font-roboto font-bold text-xs uppercase text-[#7DD3FC] mb-3">
									{intro.type}
								</h3>
								<h2 className="font-semibold leading-6 text-xl mb-10">
									{intro.title}
								</h2>
								<p className="text-gray-300 leading-10">{intro.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

const introData = [
	{
		id: 1,
		type: "Education",
		title: "Final-Year Student At Goldsmiths, University of London (SIM)",
		text: "I'm currently knee-deep in a Computer Science degree, as I’m working on my Final Year Project. This gives me a platform to hone my passion in UI/UX and web development as I constantly challenge myself to think outside of the box.",
	},

	{
		id: 2,
		type: "Internship",
		title: "Part-Time UI/UX Developer at Webby Group",
		text: "In this internship, I get to put my skills into practice and see firsthand how design and technology come together to create beautiful, user-friendly interfaces. I'm constantly learning new tools and techniques, collaborating with other developers and designers, and taking on exciting projects that challenge me to grow as a developer.",
	},
	{
		id: 3,
		type: "Work",
		title: "Freelance Web Developer",
		text: "My goal is to empower small businesses to succeed in the digital world. I help build and design websites that reflect their brand and goals. I place a strong emphasis on communication, collaboration, and responsiveness throughout the process with my clients.",
	},
];
