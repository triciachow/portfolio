import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Form from "../components/contact/Form";
import GetInTouch from "../components/contact/GetInTouch";
import React, { useState, useEffect } from "react";

export default function Contact() {
	const [visible, setVisible] = useState(true);

	const handleScroll = () => {
		if (window.scrollY > 300) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

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
			<section className="min-w-full lg:px-[100px] md:px-10 px-5 py-5 flex flex-col items-center">
				<div className="w-full lg:max-w-[1160px] flex flex-col lg:flex-row gap-10">
					<Form />
					<GetInTouch />
				</div>
			</section>
			<Footer />
		</>
	);
}
