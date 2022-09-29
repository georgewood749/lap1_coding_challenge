const request = require('supertest');
const app = require('../app');

describe('API Server', () => {
    let api;

    beforeAll(() => {
        api = app.listen(5000, () => {
            console.log(`Example app listening on port 5000`)
        })
    })

    afterAll((done) => {
        console.log('Stopping test server');
        api.close(done)
    })

    it('responds to get / with status of 200', (done) => {
        request(api).get('/').expect(200, done);
    })

    it('prints "Hello there!"', (done) => {
        request(api).get('/').expect('Hello there!', done);
    })

    it('prints "This is a test"', (done) => {
        request(api).get('/1').expect('This is a test.', done);
    })

    it('retrieves all data', (done) => {
        request(api).get('/database').expect(200, done)
    })

    it('responds to invalid methods with 405', (done) => {
        request(api).post('/database').expect(405, done)
    })

    it('retrieves a specific piece of data', (done) => {
        request(api).get('/database/1').expect(200)
        .expect({
            id: 1,
            url: "https://www.pokemon.com/uk/",
            title: "The Official Pokémon Website | Pokemon.co.uk",
            des: "The official source for Pokémon news and information on the Pokémon Trading Card Game, apps, video games, animation, and the Pokédex."
            }, done)
    })

    it('responds to invalid id with 404', (done) => {
        request(api).get('/database/0').expect(404, done)
    })
})