import React from 'react';
import SkillsGrid from '../SkillsGrid';

const AboutMe = () => {
	return (
		<div
			className="relative"
			style={{
				backgroundImage: "url('/aboutme-pattern.svg')",
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
			}}
		>
			<div
				className="absolute w-full h-full -z-40"
				style={{
					// backgroundImage: "url('/aboutme-pattern.svg')",
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					rotate: '180deg',
				}}
			></div>
			<div className=" container max-w-[90rem] mx-auto p-6  my-10 flex items-center">
				<div className="flex justify-between  gap-20 flex-col w-full">
					<div
						className="flex bg-top sm:bg-left-top"
						style={{
							backgroundImage: "url('/yellow-liquid.png')",
							backgroundRepeat: 'no-repeat',
						}}
					>
						<div className=" mt-20  text-center sm:text-left">
							<h2 className="text-6xl ">About Me</h2>
							<p className="text-xl mt-24">
								<br />
								Greetings! I'm Oussama, a passionate individual dedicated to
								crafting captivating digital experiences. I thrive on
								transforming imaginative concepts into reality and constantly
								push the boundaries of my creativity.
								<br />
								<br />
								Throughout my journey, I have meticulously built numerous
								websites, gaining invaluable wisdom in web development. I
								possess a strong command over JavaScript, its libraries, and the
								React framework, allowing me to efficiently bring ideas to life.
								<br />
								<br />
								Fueling my relentless pursuit is an unwavering motivation that
								propels me forward, always seeking new challenges and embracing
								the intricacies of this ever-evolving field.
							</p>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
