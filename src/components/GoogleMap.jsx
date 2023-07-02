import React from 'react';

export default function GoogleMap() {


	return (
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52237.5167482852!2d-1.8954319396730073!3d35.085610453701875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd785671d70261df%3A0xedb164e7e5316055!2sGhazaouet!5e0!3m2!1sen!2sdz!4v1688034007259!5m2!1sen!2sdz"
			className='rounded-lg max-w-[500px] 2md:max-w-none  3xs:w-full w-[60%] 2md:h-[300px]'
			allowFullScreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	);
}
