const input = document.querySelectorAll('.controls input');

function inputChange() {
	const suffix = this.dataset.sizing || ''; 
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

input.forEach(input => input.addEventListener('change', inputChange));
input.forEach(input => input.addEventListener('mousemove', inputChange));