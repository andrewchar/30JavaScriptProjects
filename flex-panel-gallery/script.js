const panels = document.querySelectorAll('.panel');

function expandToggle() {
	this.classList.toggle('open');
}

function openActive(e) {
	if (e.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	}
}

panels.forEach(panel => panel.addEventListener('click', expandToggle));
panels.forEach(panel => panel.addEventListener('transitionend', openActive));

