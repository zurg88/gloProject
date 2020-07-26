const formValidation = () => {
	const inputNum = document.querySelectorAll('input[placeholder = "Ваш номер телефона..."]'),
		inputWords = document.querySelectorAll('input[placeholder = "Ваше имя..."]');

	inputNum.forEach(item => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/[^+\d]/g, '');
		});
	});

	inputWords.forEach(item => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/[^а-яА-ЯёЁ\s]/ig, '');
		});
	});
};

export default formValidation;