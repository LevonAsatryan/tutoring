const car = {
    aker: '4 hat',
    kapot: 'kapuyt',
    signalTal: function() {
        console.log('pi bip');
    },
    bacelKapot: function() {
        console.log('kapot@ bacvel a :', this.kapot);
    }
};

function Car(manufacturer, model, color) {
    if (arguments.length < 3) {
        throw 'Not enough information';
    }
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    /*
        qx
        this.printInfo = function() {
            console.log(`${this.manufacturer} ${this.model} is ${this.color}`)
        }
    */
}

Car.prototype.printInfo = function() {
    console.log(`${this.manufacturer} ${this.model} is ${this.color}`)
}

const opel = new Car('Opel', 'vectra', 'red');
const rangeRover = new Car('Range', 'Rover', 'blue');
opel.printInfo();
console.log(opel);


/*
    Create a class for a book
    object properties should include author, number of pages, Date
    create functions to:
        print author's name
        print number of pages
        print Date
        print number of days required to read the book, getting the average reading pace as a parameter

    DO AFTER PREVIOUS IS DONE
    Create a class Human 
    properties:
        name: string
        age: number

    Create class Author that inherits from Human
        properties:
            booksWrote: array of strings with the name of the books the author wrote.
*/