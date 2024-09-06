const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];




function search(str) {
	let results = [];
	results = fruit.filter((val) => val.toLowerCase().indexOf(str.toLowerCase()) !== -1);
	return results;
	
}

function searchHandler(e) {
	input.value === ''? suggestions.innerHTML = '':showSuggestions(search(input.value), input.value);
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';
	results.slice(0,5).forEach((val) => {
		let newLi = document.createElement('li');
		let replacement = [val.toLowerCase().indexOf(inputVal.toLowerCase()), val.toLowerCase().indexOf(inputVal.toLowerCase()) + inputVal.length];
		newLi.innerHTML = val.replace(val.slice(replacement[0], replacement[1]), `<b>${val.slice(replacement[0], replacement[1])}</b>`);
		newLi.classList.add('ul');
		suggestions.append(newLi);
		});
}

function useSuggestion(e) {
	input.value = e.srcElement.innerText;
	suggestions.innerHTML = '';

}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);