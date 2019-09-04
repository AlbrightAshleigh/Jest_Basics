const fetch = require('node-fetch');
const swapi = require('./script2');


it('calls swapi to get people', (done) => {
    expect.assertions(1);

    swapi.getPeople(fetch)
    .then(data => {
        expect(data.count).toEqual(87)
        done();
    })
})


it('calls swapi to get people', (done) => {
    expect.assertions(1);


    swapi.getPeoplePromise(fetch)
    .then(data => {
        expect(data.count).toEqual(87);
        done();
    })
})

//another way to handle async tests is to use return on the promise

it('calls swapi to get people', () => {
    expect.assertions(1);

    return swapi.getPeople(fetch)
    .then(data => {
        expect(data.count).toEqual(87)
     
    })
})


