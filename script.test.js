const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'cheespuff.com',
    'disney.com',
    'dogpictures.com'
];

it('this is a test', () => {
    expect('hello').toBe('hello');
})


    // 
    it('this is a test', () => {
        expect(googleSearch('testtest', dbMock)).toEqual([])
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com'])

    })