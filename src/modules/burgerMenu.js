const showBurgerMenu = () => {
	const menuButton = document.querySelector('.menu-button');
	const mainMenu = document.querySelector('.hidden-small');

	if (document.documentElement.clientWidth < 768) {
		menuButton.style.display = 'block';
		mainMenu.style.display = 'none';
	}
};

export default showBurgerMenu;