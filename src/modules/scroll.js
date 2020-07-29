const scrollFunc = () => {
	window.addEventListener('scroll', () => {
		const header = document.querySelector('.header-main'),
			topBtn = document.getElementById('totop'),
			menuButtn = document.querySelector('.menu-button');

		if (window.pageYOffset  >= header.offsetHeight) {
			topBtn.style.opacity = '1';
		} else {
			topBtn.style.opacity = '0';
		}

		if (window.pageYOffset  >= menuButtn.offsetHeight) {
			menuButtn.style.position = 'fixed';
			menuButtn.style.right = '30px';
		} else {
			menuButtn.style.position = 'relative';

		}

	});
};

export default scrollFunc;
