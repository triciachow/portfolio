import { AtSign, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function GetInTouch() {
	return (
		<>
			<div className="w-full lg:w-1/2 flex flex-col gap-y-3">
				<h2 className="font-roboto font-bold text-2xl leading-[60px] uppercase">
					Get In Touch:
				</h2>
				<div className="bg-gray-800 rounded-2xl p-10 flex flex-col gap-y-5">
					<div className="flex gap-5">
						<AtSign size={24} color="#7DD3FC" />
						suyeechow0212@gmail.com
					</div>
					<div className="flex gap-5">
						<Linkedin size={24} color="#7DD3FC" />
						<Link href="https://linkedin.com/in/tricia-chow">
							linkedin.com/in/tricia-chow
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
