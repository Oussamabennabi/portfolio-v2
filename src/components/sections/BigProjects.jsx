import React, { useEffect, useState } from 'react';
import { useProjects } from '../../hooks/useProjects';
import { BigProjectCard } from '../ui/cards/BigProjectCard';

const BigProjects = () => {
	const { bigProjects } = useProjects('big');

	const [projects, setProjects] = useState([]);
	const [expand, setExpand] = useState(false);
	useEffect(() => {
		if (expand) {
			setProjects(bigProjects);
		} else {
			setProjects(bigProjects.slice(0, 6));
		}
	}, [expand, bigProjects]);

	return (
		<div
			style={{
				background: "  url('/portfolio-bg.svg')",
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div className=" container flex  justify-center items-center flex-col max-w-[90rem] mx-auto p-6">
				<h1 className="text-6xl text-center mt-72 mb-32 sm:mb-20">
					Portfolio.
				</h1>
				<div className="  grid md:grid-cols-2  grid-cols-1  gap-y-10 gap-x-5  xl:grid-cols-3 ">
					{projects.map((data) => {
						return <BigProjectCard key={data._id} project={data} />;
					})}
				</div>
				<button
					className="border-none flex gap-3 text-lg items-center mt-10 bg-primary-pink px-4 py-2 rounded-lg"
					onClick={() => setExpand((p) => !p)}
				>
					{expand ? 'Show less' : 'Show more'}
					<svg
						className={`${
							expand ? 'rotate-0' : 'rotate-180'
						} transition-all scale-125`}
						width="24"
						height="24"
						fill="none"
					>
						<path
							fill="white"
							fill-rule="evenodd"
							d="M3.515 15.345c.036.197.148.439.435.712.286.272.548.387.773.426.228.04.453.007.67-.07.45-.163.804-.497.931-.626l.006-.006 3.923-3.714.687.726-3.911 3.704c-.157.157-.637.618-1.297.856a2.3 2.3 0 0 1-1.181.115c-.44-.077-.877-.294-1.29-.687-.412-.392-.65-.815-.73-1.256a2.07 2.07 0 0 1 .148-1.184c.273-.651.802-1.153 1.035-1.375l.013-.012L9.32 7.635C10.1 6.892 11.037 6.5 11.995 6.5c.958 0 1.893.392 2.675 1.135.873.83 1.702 1.632 2.457 2.363 1.316 1.274 2.408 2.33 3.117 2.939.269.23.814.739 1.088 1.409.141.345.217.75.133 1.185-.086.438-.325.86-.736 1.25-.413.393-.852.611-1.297.685a2.31 2.31 0 0 1-1.206-.137c-.678-.257-1.204-.758-1.438-.98l-3.74-3.557.69-.725 3.728 3.546c.238.227.638.6 1.115.782.23.087.46.122.687.085.225-.037.485-.151.771-.423.289-.275.405-.518.444-.717.04-.202.009-.406-.077-.615-.179-.438-.566-.817-.814-1.03-.73-.627-1.86-1.72-3.199-3.015-.75-.726-1.566-1.515-2.412-2.32-.617-.587-1.313-.86-1.986-.86-.674 0-1.37.273-1.986.86l-5.593 5.319c-.24.228-.629.605-.816 1.05a1.073 1.073 0 0 0-.085.617Z"
							clip-rule="evenodd"
						></path>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default BigProjects;
