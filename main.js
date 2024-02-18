// Object Descructuring 1

// console.log(numPlanets) will return 8
// console.log(yearNeptuneDiscovered) will return 1846

//Object Destructuring 2

// console.log(discoveryYears); Will return object with   yearNeptuneDiscovered: 1846,  yearMarsDiscovered: 1659


//Object Destructuring 3

// getUserData({firstName: "Alejandro", favoriteColor: "purple"}) will return `Your name is Alejandro and you like purple`;

// getUserData({firstName: "Melissa"}) will return `Your name is Melissa and you like green`;

//getUserData({}) will return message with fistName property as undefined


//Array Destructuring

//Destructuring 1
/*
console.log(first); Will return "Maya"
console.log(second); Will return "Marisa"
console.log(third); Will return "Chi"

*/

//Destructuring 2

/*
console.log(raindrops); will return "Raindrops on roses"
console.log(whiskers); will return "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); will return ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]
*/

//Destructuring 3

// console.log(numbers) will return [10, 30, 20]


//Refactoring Exercises

//Object Destructuring

const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  const {numbers: {a, b }} = obj;

 //One-Line Array Swap with Destructuring

 const arr = [1, 2];

 [arr[0], arr[1]] = [arr[1], arr[0]];


//Race Results

const raceResults = ([first, second, third, ...alltheRest]) => {
    return {
        first, second, third, alltheRest
    }
}

// console.log(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']));