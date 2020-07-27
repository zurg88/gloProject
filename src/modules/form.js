
const sendFormData = form => {
	const thanksBlock = document.getElementById('thanks'),
		thanksBlockText = thanksBlock.innerHTML,
		formInputs = form.querySelectorAll('input'),
		errorElement = document.createElement('p'),
		popupCollection = document.querySelectorAll('.popup'),
		checkbox = form.querySelector('input[type = checkbox]');

	errorElement.textContent = 'Необходимо согласиться на обработку ваших персональных данных';
	errorElement.style.color = 'red';
	errorElement.style.marginTop = '15px';
	errorElement.classList.add('check-error');

	form.addEventListener('submit', event => {
		event.preventDefault();
		const data = {};

		if (checkbox && !checkbox.checked) {
			form.append(errorElement);
			return;
		}


		if (form.contains(errorElement)) {
			errorElement.remove();
		}

		formInputs.forEach(item => {
			if (item.type !== 'checkbox' && item.type !== 'radio') {
				data[item.name] = item.value;
			}
			if (item.type === 'radio' && item.checked) {
				data[item.name] = item.value;
			}
		});

		postData(data).then(response => {
			if (response.status !== 200) {
				throw new Error('status network not 200');
			}
		}).then(outputData()).then(() => {
			thanksBlock.innerHTML = thanksBlockText;
			thanksBlock.style.display = 'block';
			thanksBlock.addEventListener('click', event => {
				const target = event.target;
				if (target.closest('.overlay') || target.closest('.close_icon') || target.closest('.close-btn')) {
					popupCollection.forEach(item => {
						item.style.display = 'none';
					});
				}

			});
		}).catch(error => {
			const errText = thanksBlock.querySelector('.form-content');
			thanksBlock.style.display = 'block';
			thanksBlock.style.color = 'red';
			thanksBlock.style.fontSize = '3em';
			errText.textContent = 'Произошла ошибка!';
			thanksBlock.addEventListener('click', event => {
				const target = event.target;
				if (target.closest('.overlay') || target.closest('.close_icon') || target.closest('.close-btn')) {
					popupCollection.forEach(item => {
						item.style.display = 'none';
					});
				}

			});
			console.warn(error);
		});

	});

	const outputData = () => {
		formInputs.forEach(elem => {
			if (elem.type !== 'hidden' && elem.type !== 'radio') {
				elem.value = '';
			}
		});
	};

	const postData = body => fetch('./server.php', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	});
};

export default sendFormData;
