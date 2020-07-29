const scrollFunc = () => {
	window.addEventListener('scroll', () => {
		const header = document.querySelector('.header-main'),
			topBtn = document.getElementById('totop'),
			topMenu = document.querySelector('.top-menu');

		if (window.pageYOffset  >= header.offsetHeight) {
			topBtn.style.opacity = '1';
		} else {
			topBtn.style.opacity = '0';
		}

		if (window.pageYOffset  >= topMenu.offsetHeight) {
			topMenu.style.position = 'fixed';
		} else {
			topMenu.style.position = 'relative';

		}

	});
};

export default scrollFunc;
