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
export const renderTable = (data) => {
    let body = '';
    data.forEach(item => {
        body += `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.email}</td></tr>`;
    });
    document.getElementById('data').innerHTML = body;
};