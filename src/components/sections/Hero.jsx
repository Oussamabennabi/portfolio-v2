import React from 'react';
import CoolText from '../ui/CoolText';
const Hero = () => {
	return (
		<div
			className="flex hero "
			style={{
				background: `url('/hero-pattern.svg') center / cover, url(/small-photo-pattern.svg) -100px 10px`,

				backgroundRepeat: 'no-repeat no-repeat ',
			}}
		>
			<div
				style={{
					backgroundImage: "url('/small-hero-pattern.svg')",
					backgroundRepeat: 'no-repeat',
					backgroundPosition: '100px 100px',
					backgroundSize: '300px',
				}}
				className="container max-w-[90rem] mx-auto p-6  flex items-center"
			>
				<div
					className="flex flex-col relative w-full mb-10"
					style={{}}
				>
					<h1 className=" text-center sm:text-left">
						<CoolText
							text={'I AM A PROFESSIONAL'}
							color={'text-white'}
							className=" "
						/>
						<CoolText text={'WEB DEVELOPER'} color={'text-primary-pink'} />
					</h1>

					<p className="text-gray-color mt-1 text-center sm:text-left text-xl  max-w-full sm:max-w-[620px]">
						am a Front-end Development specialist with a passion for crafting
						clean, elegant, and highly efficient code. As a software engineer, I
						channel my expertise towards creating seamless user experiences and
						implementing cutting-edge technologies.
					</p>
					<a
						className="mt-5 primary-btn  	border-primary-yellow
	bg-primary-yellow w-32 place-self-center text-center sm:self-start"
						href="#contactme"
					>
						Contact Me
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
