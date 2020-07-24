import showPopup from './popup';

const sendFormData = form => {
	const thanksBlock = document.getElementById('thanks'),
		fixedGiftPopup = document.getElementById('gift'),
		fixedGift = document.querySelector('.fixed-gift'),
		data = {};

	form.addEventListener('submit', event => {
		event.preventDefault();

		postData(data).then((response) => {
			console.log(data);
			if (response.status !== 200) {
				throw new Error('status network not 200');
			}
		}).then(outputData()).catch(error => {
			console.error(error);
		});

	});

	const outputData = () => {
		const formInputs = form.querySelectorAll('input');
		formInputs.forEach(elem => {
			elem.value = '';
		});
		showPopup(fixedGift, fixedGiftPopup, true);
	};

	const postData = body => fetch('./server.php', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	});
};

export default sendFormData;