const calculator = (form) => {
	

	const totalPrice = document.getElementById('price-total'),
		radioCollection = form.querySelectorAll('input[name = card-type]'),
		promo = form.querySelector('input[placeholder = Промокод]');

	const priceObj = {
		1: 2999,
		6: 14990,
		9: 21990,
		12: 24990
	};

	try {
		const promoPrice = () => {
			if (promo.value === 'ТЕЛО2019') {
				totalPrice.textContent = Math.round(+totalPrice.textContent * 0.7);
			}
		};

		form.addEventListener('change', () => {
			radioCollection.forEach(item => {
				if (item.checked && totalPrice) {
					totalPrice.textContent = priceObj[item.value];
					promoPrice();
				}
			});
		});

		promo.addEventListener('input', () => {
			promoPrice();
		});
	} catch (error) {
		return;
	}

};

export default calculator;