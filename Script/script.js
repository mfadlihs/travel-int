function facebookActive(e) {
	e.classList.toggle('facebookBorder', true);
	e.children[0].classList.toggle('facebookColor', true);
}

function facebookInactive(e) {
	e.classList.toggle('facebookBorder', false);
	e.children[0].classList.toggle('facebookColor', false);
}

function instagramActive(e) {
	e.classList.toggle('instagramBorder', true);
	e.children[0].classList.toggle('instagramColor', true);
}

function telegramActive(e) {
	e.classList.toggle('telegramBorder', true);
	e.children[0].classList.toggle('telegramColor', true);
}

function instagramInactive(e) {
	e.classList.toggle('instagramBorder', false);
	e.children[0].classList.toggle('instagramColor', false);
}

function telegramInactive(e) {
	e.classList.toggle('telegramBorder', false);
	e.children[0].classList.toggle('telegramColor', false);
}

const icon = document.querySelectorAll('footer .icon');
for (let i of icon) {
	i.addEventListener('mouseover', function () {
		if (i.classList.contains('instagram')) {
			instagramActive(this);
		}

		if (i.classList.contains('facebook')) {
			facebookActive(this);
		}

		if (i.classList.contains('telegram')) {
			telegramActive(this);
		}
	});

	i.addEventListener('mouseout', function () {
		if (i.classList.contains('instagram')) {
			instagramInactive(this);
		}

		if (i.classList.contains('facebook')) {
			facebookInactive(this);
		}

		if (i.classList.contains('telegram')) {
			telegramInactive(this);
		}
	});
}
