import { useEffect, useState } from 'react';
import client from '../sanity';
import urlFor from '../utils/urlFor'
export const useResume = () => {
	const [resumeUrl, setResumeUrl] = useState(null);

	useEffect(() => {
		const main = async () => {
			await client
				.fetch(
					`*[_type == 'resume'] {

  "url": resumeFile.asset->url
}[0]`
				)
				.then((data) => {
					console.log(data);
					const {url} = data;
					setResumeUrl(url);
				});
		};
		main();
	}, []);

	return { resumeUrl, setResumeUrl };
};
