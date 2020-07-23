const showPopup = (elem, popup, hiddenElement = false) => {
	try {
		elem.addEventListener('click', () => {
			popup.style.display = 'block';
			if (hiddenElement === true) {
				elem.style.opacity = "0";
			}
		});
	} catch (error) {
		return;
	}

	popup.addEventListener('click', event => {
		const target = event.target;
		if (target.closest('.overlay') || target.closest('.close_icon') || target.closest('.close-btn')) {
			popup.style.display = 'none';
			elem.style.opacity = "1";
		}
	});
};

export default showPopup;

