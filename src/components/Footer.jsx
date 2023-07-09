import React from 'react';

const Footer = () => {
	return (
		<div className="flex flex-col justify-center p-6 items-center bg-gray-dark py-4 text-gray-color ">
			<div className="flex gap-4 justify-center 3xs:flex-col mb-20">
				<div className="flex items-start flex-col gap-4">
					<a href="mailto: oussama.bennabi.work@gmail.com">
						<div className="flex  justify-center items-center gap-4 cursor-pointer">
							<svg className="w-[2rem]" viewBox="0 0 64 64">
								<path
									fill="#222"
									d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"
								></path>
								<path
									fill="#222"
									d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"
								></path>
								<path
									fill="#222"
									d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"
								></path>
							</svg>
							<p>oussama.bennabi.work@gmail.com</p>
						</div>
					</a>

					<div className="flex  justify-center items-center gap-4 ">
						<svg
							className="w-[2rem]"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							id="phone"
						>
							<path fill="none" d="M0 0h24v24H0V0z"></path>
							<path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path>
						</svg>

						<div className="flex justify-center items-center gap-3 cursor-pointer">
							<p>+213 555 23 77 97 </p>
							<p>+213 552 06 78 62 </p>
						</div>
					</div>
				</div>

				<div className="flex flex-col items-start gap-4 ">
					<a href="https://www.linkedin.com/in/oussama-bennabi/">
						<div className="flex  justify-center items-center gap-4 cursor-pointer">
							<svg className="w-[2rem]" viewBox="0 0 28.87 28.87">
								<g data-name="Layer 2">
									<g data-name="Layer 1">
										<rect
											width="28.87"
											height="28.87"
											// fill="white"
											rx="6.48"
											ry="6.48"
										></rect>
										<path
											fill="#fff"
											d="M8 12h3v9.68H8zm1.53-4.81a1.74 1.74 0 11-1.74 1.75 1.74 1.74 0 011.74-1.75M12.92 12h2.89v1.32a3.16 3.16 0 012.85-1.56c3 0 3.61 2 3.61 4.61v5.31h-3V17c0-1.12 0-2.57-1.56-2.57s-1.8 1.22-1.8 2.48v4.79h-3z"
										></path>
									</g>
								</g>
							</svg>
							<p>LinkedIn</p>
						</div>
					</a>

					<a href="https://github.com/Oussamabennabi">
						<div className="flex  justify-center items-center gap-4 cursor-pointer">
							<svg
								className="w-[2rem]"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
							>
								<path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
							</svg>

							<p>Github</p>
						</div>
					</a>
				</div>
				<a

					href="https://www.frontendmentor.io/profile/Oussamabennabi"
				>
					<div className="flex    items-center gap-4 ">
						<svg className="w-[2rem]" viewBox="0 0 24 24">
							<path d="M12.1706 1.2719a.732.732 0 00-.7186.732v13.914a.732.732 0 00.732.732.732.732 0 00.7318-.732V2.004a.732.732 0 00-.7452-.732zm11.0741 4.1685a.7339.7339 0 00-.2764.063L16.686 8.307a.7329.7329 0 000 1.3361l6.2823 2.8134a.7378.7378 0 00.2993.0648.732.732 0 00.2973-1.401l-4.786-2.1443 4.786-2.1366a.7339.7339 0 00.3698-.9664.7339.7339 0 00-.69-.4327zm-22.499 5.032a.7316.7316 0 00-.7223.9149c1.736 6.677 7.7748 11.341 14.6822 11.341a.732.732 0 000-1.464 13.7055 13.7055 0 01-13.266-10.2449.7316.7316 0 00-.6939-.547z" />
						</svg>
						<p>Frontend Mentor</p>
					</div>
				</a>
			</div>

			<p className=" text-center text-sm">
				All right reserved{' '}
				<a className="text-primary-pink" href="">
					Oussama Bennabi
				</a>
				, 2023
			</p>
		</div>
	);
};

export default Footer;
