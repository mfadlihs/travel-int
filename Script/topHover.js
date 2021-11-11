const allTopSectionBox = document.querySelectorAll('.containerTop .box');

for (let boxSection of allTopSectionBox) {
	boxSection.addEventListener('mouseover', function () {
		const element = this;
		element.classList.toggle('boxSectionOnHover', true);
	});

	boxSection.addEventListener('mouseout', function () {
		const element = this;
		element.classList.toggle('boxSectionOnHover', false);
	});
}
