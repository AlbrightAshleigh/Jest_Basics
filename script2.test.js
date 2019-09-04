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

//mock fetch 
it('getPeople returns count and results ', () => {
        //in jest also a spy
    const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
            count:87,
            results: [0,1,2,3,4,5]
        })
    }))
    expect.assertions(2);
    return swapi.getPeoplePromise(mockFetch).then(data => {
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith('https://swapi.co.api/people'));

    });
})

