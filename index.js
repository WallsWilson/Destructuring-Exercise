// // console.log(numPlanets); 8
// //  console.log(yearNeptuneDiscovered); 1846

// // console.log(discoveryYears); 

// // yearNeptuneDiscovered: 1846,
// //   yearMarsDiscovered: 1659

// // getUserData({firstName: "Alejandro", favoriteColor: "purple"}) `Your name is Alejandro and you like purple'

// // getUserData({firstName: "Melissa"}) `Your name is Melissa and you like green'

// // getUserData({}) 'Your name is undefined and you like green'

// // console.log(first); 'Maya'
// // console.log(second); 'Maxrisa'
// // console.log(third); 'Chi'
  

// //  console.log(raindrops);  "Raindrops on roses"
// console.log(whiskers);   "whiskers on kittens"
// console.log(aFewOfMyFavoriteThings); ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]



// console.log(numbers)  [20, 10, 30]


const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
 const {numbers: {a, b}} = obj


//  let arr = [1, 2];
// [2, 1] = [1, 2];


const raceResults = ([first, second, third, ...rest]) => ({first, second ,third, rest})