const fetch = require('node-fetch');

const getPeoplePromise = fetch => {
    return fetch('https://swapi.co/api/people/1')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return {
            count: data.count,
            results: data.results
        }
    }).catch(error => console.log(error.message))
}

const getPeople = async (fetch) => {
    const getRequest = await fetch('https://swapi.co/api/people/1');
    const data = await getRequest.json();

        console.log(data);
        return {
            count: data.count,
            results: data.results
        }
    }


getPeople(fetch)