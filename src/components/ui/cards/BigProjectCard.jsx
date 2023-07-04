import React, {  useState } from 'react';
import urlFor from '../../../utils/urlFor';
import useClickOutside from '../../../hooks/useClickOutside';
import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';

export const BigProjectCard = ({ project }) => {
	const [openDropdown, setOpenDropdown] = useState(false);

	const dropdownRef = useClickOutside(() => {
		setOpenDropdown(false);
	});
	const [images, setImages] = useState(() => {
		return project.images?.map((image) => ({ original:urlFor(image) }))
	});




	return (
		<div class="max-w-sm relative 3xl:max-w-none flex flex-col transition-all overflow-hidden  rounded-lg shadow bg-gray-dark">
			{images && (
				<ImageGallery
					showBullets={false}
					showPlayButton={false}
					disableKeyDown={false}
					items={images}
				/>
			)}

			<div class="p-5 flex-1 flex flex-col gap-6">
				<div>
					<div className='flex justify-between items-center'>
						<h5 class="mb-2 text-2xl font-bold   ">{project.title}</h5>
						{/* Drop Down */}
						<div
							ref={dropdownRef}
							class=" flex relative z-[100] justify-end "
						>
							<button
								onClick={() => setOpenDropdown((p) => !p)}
								data-dropdown-toggle="dropdown"
								class="inline-block  text-sm p-1.5"
								type="button"
							>
								<span class="sr-only">Open dropdown</span>
								<svg
									class="w-6 h-6"
									aria-hidden="true"
									fill="white"
									viewBox="0 0 20 20"
								>
									<path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
								</svg>
							</button>
							<div
								id="dropdown"
								class={`z-10 ${
									openDropdown ? '' : 'hidden'
								} text-base list-none  divide-y rounded-lg shadow w-44 absolute top-8 bg-[#505050]`}
							>
								<ul class="py-2" aria-labelledby="dropdownButton">
									<li>
										<a
											target="_blank"
											href={project.hostedLink}
											class="block px-4 py-2 text-sm  hover:bg-[#646464f8]  text-gray-200 "
										>
											Hosted Link
										</a>
									</li>
									<li>
										<a
											target="_blank"
											href={project.gitHubLink}
											class="block px-4 py-2 text-sm hover:bg-[#646464f8]  text-gray-200 "
										>
											Github Link
										</a>
									</li>
								</ul>
							</div>
						</div>
						{/*  */}
					</div>
					<p class={`mb-3 font-normal max-h-[72px] overflow-y-scroll `}>
						{project.description}
					</p>
				</div>{' '}
				{/* SKILLS */}
				<div className="mt-auto">
					<h3 className="font-bold mb-2">Tech Used :</h3>
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
