export default function Intro() {
	return (
		<>
			<section className="mx-auto">
				<div className="min-w-full lg:px-[140px] md:px-10 px-5 py-5 flex flex-col items-center">
					<h2 className="w-full lg:max-w-[1160px] uppercase font-roboto font-bold text-2xl justify-start mb-10">
						What&apos;s Keeping Me Busy, Here's The Scoop:
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
						{introData.map((intro) => (
							<div
								key={intro.id}
								className={`w-full min-h-full lg:max-w-[560px] bg-gray-800 p-10 rounded-2xl transition ease-in-out`}
							>
								<div className="flex justify-between mb-3">
									<h3 className="font-roboto font-bold text-xs uppercase text-[#7DD3FC]">
										{intro.type}
									</h3>

									<span className="bg-gray-900 text-green-400 px-2 py-1 rounded text-center text-xs">
										{intro.time}
									</span>
								</div>
								<h2 className="font-semibold leading-6 text-xl mb-3">
									{intro.title}
								</h2>

								<p className="text-gray-300 leading-10 mt-10">{intro.text}</p>
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
		text: "I'm currently knee-deep in a Computer Science (Honours) degree, as I'm working on my Final Year Project. This gives me a platform to hone my passion in UI/UX and web development as I constantly challenge myself to think outside of the box.",
		time: "Oct '20 - Sep '23",
	},

	{
		id: 2,
		type: "Internship",
		title: "Part-Time UI/UX Developer at Webby Group",
		text: "In this internship, I get to put my skills into practice and see firsthand how design and technology come together to create beautiful, user-friendly interfaces. I'm constantly learning new tools and techniques, collaborating with other developers and designers, and taking on exciting projects that challenge me to grow as a developer.",
		time: "Apr - Jul '23",
	},
	{
		id: 3,
		type: "Work",
		title: "Freelance Web Developer",
		text: "My goal is to empower small businesses to succeed in the digital world. I help build and design websites that reflect their brand and goals. I place a strong emphasis on communication, collaboration, and responsiveness throughout the process with my clients.",
		time: "Dec '22 - Present",
	},
	{
		id: 4,
		type: "Hackathon",
		title: "Build for Good",
		text: "An up-coming month-long hackathon organised by Open Government Products. Together with a another team mate, we will embark on this learning journey together to build and design a product for the public good.",
		time: "Jun - Jul '23",
	},
];
