const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'cheespuff.com',
    'disney.com',
    'dogpictures.com'
];

describe('googleSearch', () => {


it('this is a silly test', () => {
    expect('hello').toBe('hello');
})

    
    it('testing search feature', () => {
        expect(googleSearch('testtest', dbMock)).toEqual([])
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com'])

    })

    it('work with undefined and null input ', ()=>{
        expect(googleSearch(undefined, dbMock)).toEqual([])
        expect(googleSearch(null, dbMock)).toEqual([])


    })
     it('should not return more than three matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3)

     })

    })