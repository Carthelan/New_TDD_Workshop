//dont forget to import your functions
import { inventory, Movie, addMovie, Rentable } from './MovieStore';

describe("Movie Store", () => {
    test('addMovie a new movie should return a new Movie object', () => {
        let newMovie = new Movie('Jaws')
        addMovie(newMovie)

        expect(inventory.length).toBe(1)
    });

    test('Calling rentable ', () => {
        let RentableMovie = new Movie("Jaws")
        let NonRentableMovie = new Movie("Star Wars", false, 0)
        console.log(NonRentableMovie)
        addMovie(RentableMovie)
        expect(Rentable(RentableMovie.title)).toMatch('You can rent Jaws')

        addMovie(NonRentableMovie)
        expect(Rentable(NonRentableMovie.title)).toMatch('Cannot rent Star Wars')

        expect(Rentable('Up')).toMatch('Up is unavailable')
    });
});
