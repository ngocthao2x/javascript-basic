// Use array map make an array of strings of the names
var users = [{
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

function namesOnly(arr) {
  return arr.map(function(arr) {
          return arr.name;
          
      });
};
console.log(namesOnly(users));