import React, { useEffect, useRef, useState } from 'react';
import GoogleMap from '../GoogleMap';
import emailjs from '@emailjs/browser';
import useWindowSize from '../../hooks/useWindowSize';

const ContactMe = () => {
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const formRef = useRef();
	const nameRef = useRef();
	const phoneRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();

	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);

		await emailjs
			.sendForm(
				'service_94fqcrc',
				'template_5d7y7kb',
				formRef.current,
				'oQTB61FKaJ-ogDs81'
			)
			.then(
				(result) => {
					setSuccess(true);
					setTimeout(() => {
						setSuccess(false);
					}, 5000);
				},
				(error) => {
					setError(true);
					console.log(error.text);
				}
			);
		setLoading(false);
	}
	return (
		<section id="contactme">
			<div className="container max-w-[90rem] mx-auto p-6 mt-20 flex items-center justify-end flex-col">
				<div

					className="text-center my-10"
				>
					<h1 className="text-6xl  pb-4">CONTACT ME</h1>
					<p className="max-w-[850px] text-gray-color">
						Connect with me for any inquiries, feedback, or collaboration
						opportunities. I'm eager to hear from you and assist in any way I
						can. Simply fill out the form, and I'll respond promptly. Let's
						start a conversation and make things happen together!
					</p>
				</div>
				<div
				
					className="flex justify-between gap-10 2md:flex-col 2md:items-center  mb-20 w-full"
				>
					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className="flex flex-col w-1/2 2md:w-[60%] 3xs:w-full   gap-4 "
					>
						<input
							className="py-3 px-6 focus:outline focus:outline-2  outline-[#d72cee]  rounded-3xl bg-gray-dark"
							type="text"
							name="name"
							required
							placeholder="Name"
							ref={nameRef}
						/>
						<input
							className="py-3 px-6 focus:outline focus:outline-2  outline-[#d72cee] rounded-3xl bg-gray-dark"
							type="email"
							name="email"
							placeholder="Email"
							ref={emailRef}
						/>
						<input
							className="py-3 px-6 focus:outline focus:outline-2  outline-[#d72cee] rounded-3xl bg-gray-dark"
							type="text"
							name="phone"
							placeholder="Phone (optional)"
							ref={phoneRef}
						/>
						<textarea
							className="py-3 px-6 focus:outline focus:outline-2  outline-[#d72cee] rounded-3xl h-[200px] resize-none overflow-auto bg-gray-dark"
							name="message"
							required
							placeholder="Message"
							ref={messageRef}
						/>
						<button
							type="submit"
							disabled={loading}
							className="primary-btn	border-primary-pink
	bg-primary-pink"
						>
							{loading ? (
								<div role="status">
									<svg
										aria-hidden="true"
										class="inline w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
										viewBox="0 0 100 101"
										fill="none"
									>
										<path
											d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
											fill="currentColor"
										/>
										<path
											d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
											fill="currentFill"
										/>
									</svg>
									<span class="sr-only">Loading...</span>
								</div>
							) : (
								'Send Message'
							)}
						</button>
					</form>
					<GoogleMap />
				</div>
			</div>
		</section>
	);
};

export default ContactMe;
