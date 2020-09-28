const carousel = () => {
	const slideContainer = document.querySelector('.slide-container'),
		servicesSlider = document.querySelector('.services-slider'),
		prev = servicesSlider.querySelector('.prev'),
		next = servicesSlider.querySelector('.next');

	try {
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
