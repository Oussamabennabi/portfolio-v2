import { useEffect, useState } from 'react';
import client from '../sanity'
export const useProjects = (fetchProjects) => {
	const [bigProjects, setBigProjects] = useState([]);
	const [smallProjects, setSmallProjects] = useState([]);

	useEffect(() => {
		const main = async () => {
			if (fetchProjects === 'big') {
				await client
					.fetch(`*[_type == "bigProjects"]{..., "tools": tools[]->{title}}`)
					.then((data) => setBigProjects(data));
			} else if (fetchProjects === 'small') {
				await client
					.fetch(`*[_type == "smallProjects"]{..., "tools": tools[]->{title}}`)
					.then((data) => setSmallProjects(data));
			}
		};
		main();
	}, [fetchProjects]);

	return { bigProjects, setBigProjects, smallProjects, setSmallProjects };
};
