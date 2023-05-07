import Image from "next/image";

export default function Header() {
	return (
		<>
			<div className="min-w-full lg:px-[140px] md:px-10 px-5 py-5 flex flex-col items-center">
				<div className="w-full lg:w-10/12 flex flex-col lg:flex-row justify-center items-center gap-5 p-10 rounded-2xl bg-gray-800">
					<h3 className="text-3xl leading-[60px] font-medium">
						Web development and UI/UX design go hand in hand in creating
						effective and user-friendly websites and applications.
					</h3>
					{/* <Image
						src="/laptop.jpeg"
						alt="Laptop"
						width={300}
						height={300}
						className="w-2/5 rounded-lg"
					/> */}
				</div>
			</div>
		</>
	);
}
