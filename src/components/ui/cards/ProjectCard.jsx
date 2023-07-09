import React, { useState } from 'react';
import urlFor from '../../../utils/urlFor';
import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';

export const ProjectCard = ({ project }) => {


	const [images, setImages] = useState(() => {
		return project.images?.map((image) => ({ original: urlFor(image) }));
	});


	return (
		<div
			class={`max-w-sm relative 3xl:max-w-none flex flex-col transition-all  overflow-hidden  rounded-lg shadow bg-gray-dark `}
		>
			{images && (
				<ImageGallery
					// disableSwipe={false}
					showBullets={false}
					showPlayButton={false}
					disableKeyDown={false}
					items={images}
				/>
			)}

			<div class="p-5 flex-1 flex flex-col  gap-2">
				<div>
					<div className="flex justify-between items-start gap-3">
						<h5 class=" text-2xl font-bold   ">{project.title}</h5>
						<div className="flex  gap-5 pt-1">
							{project.hostedLink && (
								<a target="_blank" href={project.hostedLink}>
									<svg
										className="w-5 "
										viewBox="0 0 512 512"
										enable-background="new 0 0 512 512"
									>
										<path
											fill="white"
											d="M459.654,233.373l-90.531,90.5c-49.969,50-131.031,50-181,0c-7.875-7.844-14.031-16.688-19.438-25.813  l42.063-42.063c2-2.016,4.469-3.172,6.828-4.531c2.906,9.938,7.984,19.344,15.797,27.156c24.953,24.969,65.563,24.938,90.5,0  l90.5-90.5c24.969-24.969,24.969-65.563,0-90.516c-24.938-24.953-65.531-24.953-90.5,0l-32.188,32.219  c-26.109-10.172-54.25-12.906-81.641-8.891l68.578-68.578c50-49.984,131.031-49.984,181.031,0  C509.623,102.342,509.623,183.389,459.654,233.373z M220.326,382.186l-32.203,32.219c-24.953,24.938-65.563,24.938-90.516,0  c-24.953-24.969-24.953-65.563,0-90.531l90.516-90.5c24.969-24.969,65.547-24.969,90.5,0c7.797,7.797,12.875,17.203,15.813,27.125  c2.375-1.375,4.813-2.5,6.813-4.5l42.063-42.047c-5.375-9.156-11.563-17.969-19.438-25.828c-49.969-49.984-131.031-49.984-181.016,0  l-90.5,90.5c-49.984,50-49.984,131.031,0,181.031c49.984,49.969,131.031,49.969,181.016,0l68.594-68.594  C274.561,395.092,246.42,392.342,220.326,382.186z"
										/>
									</svg>
								</a>
							)}
							{project.gitHubLink && (
								<a target="_blank" href={project.gitHubLink}>
									<svg class="w-5" viewBox="0 0 1024 1024" fill="white">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											fill="white"
											d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
											transform="scale(64)"
										></path>
									</svg>
								</a>
							)}
						</div>
					</div>
				</div>

				{/* SKILLS */}
				<div className="">
					<h3 className="font-bold mb-2 text-gray-color">Tech Used :</h3>
					<div className="flex flex-wrap gap-3">
						{project.tools.map((tool, i) => {
							return (
								<span
									className="rounded-lg bg-primary-purple text-sm px-3 py-1"
									key={i}
								>
									{' '}
									{tool.title}
								</span>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
