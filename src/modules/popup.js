const showPopup = (elem, popup) => {
	elem.addEventListener('click', () => {
		popup.style.display = 'block';
	});

	popup.addEventListener('click', event => {
		const target = event.target;
		if (target.closest('.overlay') || target.closest('.close_icon') || target.closest('.close-btn')) {
			popup.style.display = 'none';
		}
	});
};

export default showPopup;

