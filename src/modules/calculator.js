const calculator = (form) => {

	const totalPrice = document.getElementById('price-total'),
		radioCollection = form.querySelectorAll('input[name = card-type]'),
		promo = form.querySelector('input[placeholder = Промокод]'),
		checkClubMozaika = document.getElementById('card_leto_mozaika'),
		checkClubSchelkovo = document.getElementById('card_leto_schelkovo');

	const mozaika = {
		1: 1999,
		6: 9990,
		9: 13990,
		12: 19990
	};

	const schelkvoPriceObj = {
		1: 2999,
		6: 14990,
		9: 21990,
		12: 24990
	};

	totalPrice.textContent = mozaika[1];

	try {
		const promoPrice = () => {
			if (promo.value === 'ТЕЛО2019') {
				totalPrice.textContent = Math.round(+totalPrice.textContent * 0.7);
			}
		};

		form.addEventListener('input', () => {
			radioCollection.forEach(item => {
				if (item.checked && totalPrice && checkClubMozaika.checked) {
					totalPrice.textContent = mozaika[item.value];
					promoPrice();
				} else if (item.checked && totalPrice && checkClubSchelkovo.checked) {
					totalPrice.textContent = schelkvoPriceObj[item.value];
					promoPrice();
				}
			});
		});
	} catch (error) {
		return;
	}

};

export default calculator;