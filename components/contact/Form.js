import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
	const form = useRef();
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	const sendEmail = async (e) => {
		e.preventDefault();
		try {
			const result = await emailjs.sendForm(
				"service_e5p3h4d",
				"template_dy4ngrr",
				form.current,
				"fDYoHRH_tdGm94fLt"
			);
			console.log(result.text);
			form.current.reset();
			setSubmitted(true);
		} catch (error) {
			console.log(error.text);
			setError(true);
		}
	};

	return (
		<>
			<div className="w-full lg:w-1/2 flex flex-col gap-y-3">
				{submitted ? (
					<div className="w-full rounded-2xl px-10 py-5 text-green-400 bg-gray-800">
						Hooray! Message successfully sent.
					</div>
				) : (
					""
				)}
				{error ? (
					<div className="w-full rounded-2xl px-10 py-5 text-red-500 bg-gray-800">
						Oh no :&#40; There was an error sending your message. Please try
						again.
					</div>
				) : (
					""
				)}
				<h2 className="font-roboto font-bold text-2xl leading-[60px] uppercase">
					Leave A Message:
				</h2>
				<form ref={form} onSubmit={sendEmail}>
					<div className="flex flex-col mb-4">
						<label htmlFor="name" className="mb-1">
							Name
						</label>
						<input
							type="text"
							name="name"
							className="p-5 rounded-lg border-2 border-gray-50/50 bg-gray-900 focus:outline-none focus:ring-0 focus:border-gray-50"
							placeholder="Jonathan Tan"
							required
						/>
					</div>
					<div className="flex flex-col mb-4">
						<label htmlFor="email" className="mb-1">
							Email
						</label>
						<input
							type="email"
							name="email"
							className="p-5 rounded-lg border-2 border-gray-50/50 bg-gray-900 focus:outline-none focus:ring-0 focus:border-gray-50"
							placeholder="jonathan@email.com"
							required
						/>
					</div>
					<div className="flex flex-col mb-4">
						<label htmlFor="subject" className="mb-1">
							Subject
						</label>
						<input
							type="text"
							name="subject"
							className="p-5 rounded-lg border-2 border-gray-50/50 bg-gray-900 focus:outline-none focus:ring-0 focus:border-gray-50"
							placeholder="Job Opportunity"
							required
						/>
					</div>
					<div className="flex flex-col mb-4">
						<label htmlFor="message" className="mb-1">
							Message
						</label>
						<textarea
							type="text"
							name="message"
							className="p-5 rounded-lg border-2 border-gray-50/50 bg-gray-900 focus:outline-none focus:ring-0 focus:border-gray-50"
							placeholder="Write your message here..."
							required
							rows={4}
						/>
					</div>

					<button
						className="w-full rounded-lg bg-gray-700/50 p-5 hover:bg-gray-700 transition-all ease-in-out"
						type="submit"
					>
						Submit
					</button>
				</form>
			</div>
		</>
	);
}
