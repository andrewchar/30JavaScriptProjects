const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(endpoint)
	.then(blob => blob.json())
	.then(data => cities.push(...data));

function findMatch(wordToMatch, cities) {
	return cities.filter(placeSearched => {
		const regExp = new RegExp(wordToMatch, 'gi');
		return placeSearched.city.match(regExp) || placeSearched.state.match(regExp);
	});
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function showResults() {
	const searchResult = findMatch(this.value, cities);
	const buildHtml = searchResult.map(place => {
		const regExp = new RegExp(this.value, 'gi');
		const city = place.city.replace(regExp, `<span class="hl">${this.value}</span>`)
		const state = place.state.replace(regExp, `<span class="hl">${this.value}</span>`)
		return `
			<li>
				<span class="name">${city}, ${state}</span>
				<span>${numberWithCommas(place.population)}</span>
			</li>
		`
	}).join('');
	suggestions.innerHTML = buildHtml;
}

const searchBar = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchBar.addEventListener('change', showResults);
searchBar.addEventListener('keyup', showResults);
