import React, { useEffect, useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import { useResume } from '../hooks/useResume'

const Navbar = () => {
	const [hidden, setHidden] = useState(true);
	const { width, height } = useWindowSize();
	const { resumeUrl} = useResume()
	useEffect(() => {
		if (!hidden) {
			document.body.style.overflowY = 'hidden';
		} else  {
			document.body.style.overflowY = 'auto';
		}
	}, [hidden]);
	useEffect(() => {
		if (width > 825) {
			setHidden(true)
		}
	},[width])
	useEffect(() => {
		const sections = document.querySelectorAll('section');
		const links = document.querySelectorAll('a.nav-link');

		const handleScroll = () => {
			const top = window.scrollY;
			sections.forEach((section) => {
				const offset = section.offsetTop -  	100;
				const height = section.offsetHeight;
				const id = section.getAttribute('id');

				if (top >= offset && top < offset + height) {
					links.forEach((link) => {
						link.classList.remove('active');
					});
					const activeLink = document.querySelector(
						`a.nav-link[href*='${id}']`
					);
					if (activeLink) {
						activeLink.classList.add('active');
					}
				}
			});
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<nav
			className={`${
				!hidden ? 'open' : ''
			} flex select-none justify-between z-[1000] backdrop-blur-[12px]  fixed inset-0 h-16`}
		>
			{/*  LOGO  */}
			<div className="relative group z-[10000] cursor-pointer">
				<span className=" pointer-events-none cursor-pointer left-6 logo-text absolute z-40 inset-0  text-[50px]">
					OB
				</span>
			</div>
			{/* LINKES */}
			<div className={`nav-container `}>
				<ul className={`nav-content ${!hidden && 'open'}`}>
					<a
						onClick={() => setHidden(true)}
						href="#aboutme"
						className="nav-link  active cursor-pointer transition-all duration-150 "
					>
						About Me.
					</a>
					<a
						onClick={() => setHidden(true)}
						href="#portfolio"
						className="nav-link  cursor-pointer transition-all duration-150"
					>
						Portfolio.
					</a>
					<a
						onClick={() => setHidden(true)}
						href="#contactme"
						className="nav-link  cursor-pointer transition-all duration-150"
					>
						Contact Me.
					</a>{' '}
					<a
						onClick={() => setHidden(true)}
						
						href={"/Oussama_Bennabi_Resume_11-09-2023-04-06-20.pdf"}
								className="nav-link  cursor-pointer transition-all duration-150"
					>
						Resume.
					</a>{' '}
				</ul>
			</div>

			<div
				onClick={() => setHidden((prev) => !prev)}
				className={`w-10 h-6 m-6 flex justify-between flex-col cursor-pointer hamburger ${
					!hidden ? 'active' : ''
				}`}
			>
				<div className="bg-white my-[6px]  line h-[3px]"></div>
				<div className="bg-white my-[6px]  line ml-auto w-7 h-[3px]"></div>
				<div className="bg-white my-[6px]  line w-4 ml-auto h-[3px]"></div>
			</div>
		</nav>
	);
};

export default Navbar;
