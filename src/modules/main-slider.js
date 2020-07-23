const mainSlider = (slider, slideItems) => {
	let currentslide = 0;
	console.log(slideItems.length);

	const autoPlay = () => {
		slideItems[currentslide].style.display = 'none';
		currentslide++;
		if (currentslide === slideItems.length) {
			currentslide = 0;
		}
		slideItems[currentslide].style.display = 'flex';
	};

	setInterval(autoPlay, 2500);
};

export default mainSlider;