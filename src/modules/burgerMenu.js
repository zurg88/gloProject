const showBurgerMenu = () => {
	const menuButton = document.querySelector('.menu-button'),
		mainMenu = document.querySelector('.hidden-small'),
		popupMenu = document.querySelector('.popup-menu');

	if (document.documentElement.clientWidth < 768) {
		menuButton.style.display = 'block';
		mainMenu.style.display = 'none';
	}

	menuButton.addEventListener('click', () => {
		popupMenu.style.display = 'flex';
	});

	popupMenu.addEventListener('click', (event => {
		const target = event.target;
		if (target.matches('.close-menu-btn img') || target.matches('.scroll a')) {
			popupMenu.style.display = 'none';
		}
	}));
};

export default showBurgerMenu;
