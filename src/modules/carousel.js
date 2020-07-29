const carousel = () => {
	const slideContainer = document.querySelector('.slide-container'),
		servicesSlider = document.querySelector('.services-slider'),
		prev = servicesSlider.querySelector('.prev'),
		next = servicesSlider.querySelector('.next'),
		slide = slideContainer.querySelector('.slide');

	try {
		let sliderWidth = 920;

		if (document.documentElement.clientWidth < 768) {
			sliderWidth = 600;
		}
		
		if (document.documentElement.clientWidth < 992) {
			sliderWidth = 760;
		}

		if (document.documentElement.clientWidth < 575) {
			sliderWidth = 350;
		}

		servicesSlider.style.width = `${sliderWidth}px`;

		prev.addEventListener('click', () => {
			const cloneElem = slideContainer.firstElementChild.cloneNode(true);
			slideContainer.append(cloneElem);
			slideContainer.firstElementChild.remove();
		});
	} catch (error) {
		return;
	}

	next.addEventListener('click', () => {
		const cloneElem = slideContainer.lastElementChild.cloneNode(true);
		slideContainer.prepend(cloneElem);
		slideContainer.lastElementChild.remove();
	});
};

export default carousel;