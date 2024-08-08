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
export const getData = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users/');
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};