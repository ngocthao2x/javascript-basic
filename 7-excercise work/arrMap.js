// // Use array map make an array of strings of the names
// var users = [{
//     name: "Angelina Jolie",
//     age: 80
//   },
//   {
//     name: "Eric Jones",
//     age: 2
//   },
//   {
//     name: "Paris Hilton",
//     age: 5
//   },
//   {
//     name: "Kayne West",
//     age: 16
//   },
//   {
//     name: "Bob Ziroll",
//     age: 100
//   }
// ];

// function namesOnly(arr) {
//   return arr.map(function(arr) {
//           return arr.name;
          
//       });
// };
// console.log(namesOnly(users));



// Use array map make an array of the names in <h1></h1>, and the ages in <h2></h2>
const users = [{
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
];

function readyToPutInTheDOM(arr) {
  var result = ' ';
  return arr.map(function(arr) {
      result = arr.name + ' ' + arr.age;
      return result;
    });
  }
console.log(readyToPutInTheDOM(users))