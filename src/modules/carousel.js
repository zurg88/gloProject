const carousel = () => {
	const servicesSlider = document.querySelector('.services-slider'),
		prev = servicesSlider.querySelector('.prev'),
		next = servicesSlider.querySelector('.next');

	let slideCollection = servicesSlider.querySelectorAll('.slide');

	servicesSlider.style.width = Math.floor(slideCollection[0].offsetWidth * 6) + 'px';
	let count = 0;

	try {
		prev.addEventListener('click', () => {
			const cloneElem = slideCollection[count].cloneNode(true);
			prev.before(cloneElem);
			slideCollection[count].remove();
			count++;
			console.log(count);
			if (count >= slideCollection.length - 1) {
				count = 0;
				slideCollection = servicesSlider.querySelectorAll('.slide');
			}
		});
	} catch (error) {
		return;
	}

	let nextCount = 9;

	next.addEventListener('click', () => {
		const cloneElem = slideCollection [nextCount].cloneNode(true);
		servicesSlider.prepend(cloneElem);
		slideCollection[nextCount].remove();
		nextCount--;
		console.log(nextCount);
		if (nextCount <= 0) {
			nextCount = slideCollection.length - 1;
			slideCollection = servicesSlider.querySelectorAll('.slide');
		}
	});
};

export default carousel;