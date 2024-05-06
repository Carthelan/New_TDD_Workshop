// A movie store is asking you to make an application
// the application can add movies to an inventory array,
// track if a movie is rented out or in stock,
// and calculate a customer's total cost for the # of rentals * # of days.
// A customer can only rent a movie if it is in stock.

export class Movie {
    title: string;
    status: boolean;
    daysRented: number;

    constructor(title: string, status: boolean=true, daysRented: number=0) {
        this.title = title;
        this.status = status;
        this.daysRented = daysRented;
    }
}

interface NewMovie {
    title: string;
    status: boolean;
    daysRented: number;
}

export let inventory = []


export function addMovie(movie: Movie): NewMovie[]  {
    inventory.push(movie)
    return inventory
}

export function Rentable(movieTitle: string) {
    let searchedMovie = inventory.find(element => element.title === movieTitle)
    if (searchedMovie) {
        if(searchedMovie.status === true){
            return `You can rent ${movieTitle}`
        } else{
            return `Cannot rent ${movieTitle}`
        }   
    } else {
        return `${movieTitle} is unavailable`
    }
}
// })
//     if(inventory[0].status == true){
//         return `You can rent ${Movie}`
//     }
//     else {
//         return `Cannot rent ${Movie}`
//     }

let currentRents = 0

export function Rent(movie: Movie) {
    this.status = false
    currentRents + 1
}

export function Price(rentals: number, daysRented: number) {

}

// Inventory.map(function(element) {
//     if(element = Movie){
//     return "Is in stock";
//     }
// })