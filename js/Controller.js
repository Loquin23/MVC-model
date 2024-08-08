const settings = {
	async: true,
	crossDomain: true,
	url: 'https://jsonplaceholder.typicode.com/users/',
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'Sign Up for Key',
		'x-rapidapi-host': 'jsonplaceholder.typicode.com'
	}
};
$.ajax(settings).done(function (response) {
	console.log(response);
});
import { getData } from './getData.js';
import { renderTable } from './renderTable.js';

const init = async () => {
    const data = await getData();
    renderTable(data);
};

document.addEventListener('DOMContentLoaded', init);