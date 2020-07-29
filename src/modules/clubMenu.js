const toggleClubMenu = () => {
	const clubSelect = document.querySelector('.club-select'),
		clubSelectList = clubSelect.querySelector('ul'),
		clubSelectListItem = clubSelectList.querySelector('li'),
		clubSelectText = clubSelect.querySelector('p'),
		headerMain = document.querySelector('.header-main');

	headerMain.addEventListener('click', event => {
		const target = event.target;

		if (target === clubSelectText) {
			clubSelectList.classList.toggle('show-club-menu');
		} else if (target !== clubSelectListItem) {
			clubSelectList.classList.remove('show-club-menu');
		}
	});

};

export default toggleClubMenu;