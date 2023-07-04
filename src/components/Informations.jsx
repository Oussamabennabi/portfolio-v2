import React from 'react'

const Informations = () => {
  return (
		<div className="container max-w-[90rem] mx-auto p-6 mb-10  flex flex-wrap  justify-center gap-20 items-center ">
			{/* <div className="flex  flex-col items-center justify-between  self-stretch">
				<svg className="w-[4rem]" viewBox="0 0 64 64">
					<path
						className="fill-[#6b6b6bc9] "
						d="M32 0C20.7 0 11.54 9.15 11.54 20.45 11.54 31.75 32 58.74 32 58.74s20.45-26.99 20.45-38.29S43.3 0 32 0zm0 33.99c-7.48 0-13.54-6.06-13.54-13.54S24.52 6.91 32 6.91c7.48 0 13.54 6.06 13.54 13.54S39.48 33.99 32 33.99z"
					></path>
				</svg>
				<p className="text-center text-gray-color">Tlemcen Ghazaouet#Tounan</p>
			</div> */}

			<div className="flex flex-col items-center  justify-between self-stretch">
				<svg className="w-[4rem]" viewBox="0 0 52 52">
					<circle
						cx="26"
						cy="26"
						r="24"
						className="fill-[#6b6b6bc9]"
						stroke="#000"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
					></circle>
					<path
						fill="none"
						stroke="#000"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M44.6 10.8c-.2.1-.4.1-.6.1-1.1.3-2.2.1-3.2-.4-.3-.2-.6-.4-.9-.3-.2.1-.3.2-.4.4-1.2 1.5-3.2 1.9-4.9 1-.3-.2-.7-.4-1-.3s-.5.4-.7.7c-.7 1.1-1.2 2.3-1.4 3.5-.2 1.3.2 2.6 1.1 3.5.3.2.5.4.7.6.2.3.4.6.5.9.9 1.7 3 2.3 4.7 1.4.2-.1.4-.3.6-.4.2-.3.6-.6.9-.7.7-.2 1.2.4 1.7 1 .6.6 1 1.4 1 2.3-.1.8-.6 1.6-.2 2.2.2.2.4.4.7.6 1.1.8.9 2.5.9 3.8 0 1 .2 2 .5 3 .4 1.3 1.3 2.4 2.5 3 .1.1.2.1.4.1M27.5 2c.1.8-.2 1.6-.9 2-.7.5-1.6.7-2.4.7-.7-.1-1.4-.1-2.1.1-1.1.5-1.2 2.3-2.4 2.9C19.4 7.8 19 7.8 18.7 8c-1.1.5-1 2.1-1.9 3C16 11.7 15 11.9 14 11.7c-1-.2-2-.3-3-.1-1 .3-1.8 1.4-1.4 2.3s1.6 1 2.5.9 2-.2 2.7.4.6 2.3 1.5 3c.8.5 1.7.5 2.5 0 .8-.5 1.6-.7 2.5-.8 2.3.1 3.2 3.2 5.4 3.9.9.3 1.9.1 2.7.4 1.6.6 2.2 2.8 1.5 4.4-.3.6-.6 1.2-.8 1.8-.2.8.1 1.6-.1 2.4-.4 1.5-2.5 2.2-2.5 3.8.1.4.1.9 0 1.3-.2.3-.5.6-.8.8-1.7 1.1-3 2.7-3.8 4.6-.1.3-.2.5-.2.8.1.4.2.7.5 1 .4.5.7 1.1.7 1.8 0 .7-.5 1.3-1.2 1.3-.4-.1-.8-.4-1-.7-.5-.5-1-1.1-1.3-1.8-.2-.8-.1-1.8-.5-2.5-.4-.4-.7-.9-1.1-1.3-1.3-1.7.3-4.3-.5-6.2-.7-1.6-2.8-2.4-3.1-4.1 0-.7 0-1.3.2-1.9 0-1.8-.4-3.6-1.3-5.1-.2-.5-.5-.9-.8-1.2-.6-.4-1.5-.3-2.1-.7-.5-.4-.9-.9-1.2-1.5-.4-.8-1-1.4-1.8-1.8-.8-.4-1.7-.3-2.4.1-.4.3-.6.7-1 .9-.4.3-1 .4-1.5.4"
					></path>
				</svg>
				<p className="text-center  text-gray-color">
					<a href="oussama-bennabi-v2.netlify.app">oussama.bennabi</a>
					<br />
					<a href="mailto: oussama.bennabi.work@gmail.com">
						oussama.bennabi.work@gmail.com
					</a>
				</p>
			</div>

			<div className="flex flex-col items-center  justify-between self-stretch">
				<svg className="w-[4rem]" viewBox="0 0 1024 1024" fill="none">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						className="fill-[#6b6b6bc9] "
						d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
						transform="scale(64)"
					/>
				</svg>
				<a
					href="https://github.com/Oussamabennabi"
					className="text-center  text-gray-color"
				>
					Github
				</a>
			</div>

			<div className="flex flex-col items-center  justify-between self-stretch">
				<svg role="img" viewBox="0 0 24 24" className="w-[4rem]">
					<path
						className="fill-[#6b6b6bc9] "
						d="M12.1706 1.2719a.732.732 0 00-.7186.732v13.914a.732.732 0 00.732.732.732.732 0 00.7318-.732V2.004a.732.732 0 00-.7452-.732zm11.0741 4.1685a.7339.7339 0 00-.2764.063L16.686 8.307a.7329.7329 0 000 1.3361l6.2823 2.8134a.7378.7378 0 00.2993.0648.732.732 0 00.2973-1.401l-4.786-2.1443 4.786-2.1366a.7339.7339 0 00.3698-.9664.7339.7339 0 00-.69-.4327zm-22.499 5.032a.7316.7316 0 00-.7223.9149c1.736 6.677 7.7748 11.341 14.6822 11.341a.732.732 0 000-1.464 13.7055 13.7055 0 01-13.266-10.2449.7316.7316 0 00-.6939-.547z"
					/>
				</svg>
				<a
					href="https://www.frontendmentor.io/profile/Oussamabennabi"
					className="text-center  text-gray-color"
				>
					Frontend Mentor
				</a>
			</div>

			<div className="flex flex-col items-center  justify-between self-stretch">
				<svg className="w-[4rem]" viewBox="0 0 24 24">
					<path
						className="fill-[#6b6b6bc9]"
						d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
					/>
				</svg>
				<a
					href="https://www.linkedin.com/in/oussama-bennabi/"
					className="text-center  text-gray-color"
				>
					LinkedIn
				</a>
			</div>

			<div className="flex flex-col items-center  justify-between self-stretch">
				<svg className="w-[4rem]" viewBox="0 0 100 125">
					<path
						className="fill-[#6b6b6bc9]"
						d="M32.125 5.906c-3.7 0-6.688 2.723-6.688 6.094v76.5c0 3.37 2.988 6.094 6.688 6.094h35.25c3.7 0 6.688-2.723 6.688-6.094V12c0-3.37-2.988-6.094-6.688-6.094h-35.25zM63.969 8.22a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm-18.438.656h8.438c.2 0 .375.181.375.406 0 .225-.176.406-.375.406H45.53c-.2 0-.375-.18-.375-.406 0-.225.176-.406.375-.406zm-13.375.438c.228 0 .407.178.407.406 0 .228-.179.437-.407.437-.228 0-.406-.21-.406-.437 0-.228.178-.406.406-.406zm1.438.03c.215 0 .406.16.406.376 0 .215-.19.406-.406.406-.216 0-.375-.19-.375-.406 0-.216.159-.375.375-.375zm-5.938 4.095h44.188v71.78H27.656v-71.78zm16.75 74.874h10.688c.74 0 1.343.471 1.343 1.063v1.219c0 .592-.603 1.062-1.343 1.062H44.406c-.74 0-1.343-.47-1.343-1.062v-1.219c0-.592.603-1.063 1.343-1.063z"
					></path>
				</svg>
				<p className="text-center  text-gray-color">
					+213 55 23 77 97 <br />
					+213 52 06 78 62
				</p>
			</div>
		</div>
	);
}

export default Informations