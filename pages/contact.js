import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Form from "../components/contact/Form";
import GetInTouch from "../components/contact/GetInTouch";

export default function Contact() {
	return (
		<>
			<Navbar />
			<section className="min-w-full lg:px-[140px] md:px-10 px-5 py-5 flex flex-col items-center">
				<div className="w-full lg:max-w-[1160px] flex flex-col lg:flex-row gap-10">
					<Form />
					<GetInTouch />
				</div>
			</section>
			<Footer />
		</>
	);
}
