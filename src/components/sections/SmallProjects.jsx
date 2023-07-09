import React, { useEffect, useState } from 'react';
import { useProjects } from '../../hooks/useProjects';
import { ProjectCard } from '../ui/cards/ProjectCard'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { SmallProjectCard } from '../ui/cards/SmallProjectCard'

const BigProjects = () => {
	const { smallProjects } = useProjects('small');
	const [projects, setProjects] = useState([]);

	useEffect(() => {
				setProjects(smallProjects);
	},[smallProjects])
	return (
		<div >
				<h1 className="text-6xl text-center mb-10">Fun Projects.</h1>

				<Splide
					extensions={{ AutoScroll }}
					options={{
						rewind: true,
						perPage: 3.5,
						type: 'loop',
						focus: 'center',
						pagination: false,
						arrows:"",
						autoScroll: {
							speed: 2,
						},
						drag: 'free',
						breakpoints: {
							1410: { perPage: 2.5, gap: '1rem' },
							1250: { perPage: 2, gap: '1rem' },
							1070: { perPage: 1.5, gap: '1rem' },
							620: { perPage: 1, gap: '1rem' },
						},
					}}
				>
					{projects.map((p, i) => {
						return (
							<SplideSlide
								className="flex items-center justify-center "
								key={i}
							>
								<SmallProjectCard project={p} key={p._id}/>
							</SplideSlide>
						);
					})}
				</Splide>


			</div>
	);
};

export default BigProjects;
