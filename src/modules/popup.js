const showPopup = (elem, popup, hiddenElement = false) => {
	try {
		elem.addEventListener('click', () => {
			popup.style.display = 'block';
			if (hiddenElement === true) {
				elem.style.display = 'none';
			}
		});
	} catch (error) {
		return;
	}

	popup.addEventListener('click', event => {
		const target = event.target;
		if (target.closest('.overlay') || target.closest('.close_icon') || target.closest('.close-btn')) {
			popup.style.display = 'none';
		}
	});
};

export default showPopup;

