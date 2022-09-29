'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`Order received! ${this.starterMenu}`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza: function (mainIngridient, ...otherIngridients) {
    console.log(mainIngridient);
    console.log(otherIngridients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

//array desctructuring
const arr = [1, 2, 3, 4, 5];
let [x, y, z] = arr;
//let [, x, y, z] = arr; -> skiping indexes
console.log(x, y, z, arr);

//testing with the pizza object:
let [first, second] = restaurant.categories;
console.log(first, second, restaurant.categories);

//restaurant.categories[0] = 'change!';

console.log(first, second, restaurant.categories[0]);

//switching variables:
//lets switch the property categories' two first values: "italian"
//and "pizzeria"
//first create a new array with the two variables inverted,
//then desctructure the two values to that new array:

[first, second] = [second, first];
console.log(first, second);

// using destructuring to get 2 values returned from a funcion:
const [starter, mainCourse] = restaurant.order(0, 2);
//resturant.order() is a method...
console.log(starter, mainCourse);

//nested arrays destructuring:
const nested = [2, 4, [5, 6]];
//how to get the first and the last indexes from nested:
const [dest1, , dest2] = nested;
console.log(dest1, dest2);
//but we can do a destructuring inside a destructuring:
const [inception1, , [inception5, inception6]] = nested;
console.log(inception1, inception5, inception6);

//setting default values for the variables when destructuring (happens
//when you dont know the lenght of the array):
const [p, q, r] = [8, 9];
//in this case r would be undefined... so we could set a default.
const [v = 1, g = 1, j = 1] = [10, 11];

//  OBJECT DESTRUCTURING:
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(`opening hours: ${JSON.stringify(hours)}`);
console.log(hours);
console.log(`the name of the restaurant is ${restaurantName}`);
console.log(`The types of food serverd: ${tags}`);

/*dealing with undefined (properties that doesnt exist), just set the default value, in case the property is not there, like default parameters in functions*/
const { starterMenu: starters = [], menu = [] } = restaurant;
console.log(menu, starters);

/*Mutating variables: when you already have the names of the properties as variables outside the object you have to use parentesis to assign the destructured values to those variables that are already declared since you cant begin a line with "{" */

let a = 111;
let b = 999;
const objectMutate = { a: 23, b: 7, c: 14 };
/*cant do this:
{ a, b } = objectMutate because the line starts with "{"7
would get unexpected token "{" so just wrap it in parentesis */
({ a, b } = objectMutate);
console.log(a, b);

//nested objects:
const {
  fri: { open: o, close: c },
} = hours;
console.log(o, c);

// *********Spread Operator: **************

const arrSpr = [3, 4, 5, 6];
const badNewArray = [1, 2, arrSpr[0], arrSpr[1]]; //not like this!
const newArr = [1, 2, ...arrSpr];
console.log(newArr);
console.log(...newArr);

// spread with objects properties:

const newMenu = [...restaurant.mainMenu, 'Gnocchi', 'Lasagna'];

//coping arrays with spread:

const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays:

const wholeMenu = [...restaurant.starterMenu, ...newMenu];
console.log(mainMenuCopy, wholeMenu);

/* spreads only work with iterables, doesnt work with objects... iterables: arrays, strings, maps, sets. */

const str = 'string';
const letters = [...str];
console.log(letters); // ["s", "t", "r"...]

const ingredients = [
  // prompt("let's make pasta! Whats the first ingredient?"),
  // prompt("let's make pasta! Whats the second ingredient?"),
  // prompt("let's make pasta! Whats the third ingredient?"),
];
console.log(ingredients);

//restaurant.orderPasta(ingredients[0, ingredients[1], ingredients[2]])
restaurant.orderPasta(...ingredients);

//can use spread to shallow copy an object:
const ristorante = { ...restaurant };
console.log(ristorante);

// ************ Rest Patterns ************

/* the rest pattern is used on the left of the =, it collects unused elements in the destructuring assingment
always need to be the last, since it does not compute skiped indexes*/

const arrayRest = [1, 2, 3, 4, 5];

const [firstI, secondI, ...others] = arrayRest;
//this gives firstI = 1, secondI = 2 and others = [3,4,5]

//works with objects too, rested collected into new object:

const { sat: weekend, ...weekdays } = hours;

// ********** Rest parameters ********

// picks all the arguments passed and put in an array:

const add = function (...numbers) {
  console.log(numbers);
};
add(2, 3); // [2.3]
add(2, 3, 5, 6, 7); // [2,3,5,6,7]
add(10, 20, 3333, 45);

// rest parameters: arguments separeted by comma
// spread: values separeted by a comma

// ***** FOR OF LOOP WITH DESTRUCTURING *******

for (const iterator in restaurant) {
  console.log(iterator);
}

for (const [index, element] of newMenu.entries()) {
  console.log(`${index + 1}: ${element}`);
}

/*when you call array.entries() it gives you an array that has nested arrays containing all the indexes in the 0 index and the elements in the 1 indexes so [[index 0, element 0], [index 1, element 1], etc] */


