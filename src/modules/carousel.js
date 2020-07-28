const carousel = () => {
	const slideContainer = document.querySelector('.slide-container'),
		servicesSlider = document.querySelector('.services-slider'),
		prev = servicesSlider.querySelector('.prev'),
		next = servicesSlider.querySelector('.next');

	try {
		prev.addEventListener('click', () => {
			const cloneElem = slideContainer.firstChild.cloneNode(true);
			slideContainer.append(cloneElem);
			slideContainer.firstChild.remove();
			console.log(typeof(cloneElem));
			console.log(cloneElem);
		});
	} catch (error) {
		return;
	}

	next.addEventListener('click', () => {
		const cloneElem = slideContainer.lastChild.cloneNode(true);
		slideContainer.prepend(cloneElem);
		slideContainer.lastChild.remove();
		console.log(cloneElem);
	});
};

export default carousel;