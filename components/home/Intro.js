export default function Intro() {
	return (
		<>
			<section className="mx-auto">
				<div className="min-w-full lg:px-[140px] md:px-10 px-5 py-5 flex flex-col items-center">
					<h2 className="w-full lg:max-w-[1160px] uppercase font-roboto font-bold text-2xl justify-start mb-10">
						What&apos;s Keeping Me Busy:
					</h2>
					<div className="min-h-full grid grid-cols-1 md:grid-cols-2 gap-10">
						<div className="w-full min-h-[380px] lg:max-w-[560px] bg-gray-800 p-10 rounded-2xl">
							<div className="flex justify-between mb-3">
								<h3 className="font-roboto font-bold text-xs uppercase text-[#7DD3FC]">
									Current employment
								</h3>
								<span className="bg-gray-900 text-green-400 px-2 py-1 rounded text-center text-xs">
									Jul 23 - Current
								</span>
							</div>
							<h2 className="font-semibold leading-6 text-xl mb-3">
								UX Designer, Wizlah
							</h2>
							<p className="text-gray-300 leading-10 mt-10">
								I&apos;m currently knee-deep in a Computer Science Honours
								degree, as I&apos;m working on my Final Year Project. This gives
								me a platform to hone my passion in UI/UX and web development as
								I constantly challenge myself to think outside of the box.
							</p>
						</div>
						<div className="w-full min-h-[380px] lg:max-w-[560px] bg-gray-800 p-10 rounded-2xl">
							<div className="flex justify-between mb-3">
								<h3 className="font-roboto font-bold text-xs uppercase text-[#7DD3FC]">
									Internship
								</h3>
								<span className="bg-gray-900 text-green-400 px-2 py-1 rounded text-center text-xs">
									Apr - Jun &apos;23
								</span>
							</div>
							<h2 className="font-semibold leading-6 text-xl mb-3">
								Part-time UI/UX Developer at Webby Group (Remote)
							</h2>
							<p className="text-gray-300 leading-10 mt-10">
								In this internship, I get to put my skills into practice and see
								firsthand how design and technology come together to create
								beautiful, user-friendly interfaces. I&apos;m constantly
								learning new tools and techniques, collaborating with other
								developers and designers, and taking on exciting projects that
								challenge me to grow as a developer.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
