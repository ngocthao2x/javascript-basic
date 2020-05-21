// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    var numbers = arr.filter(function(item){
        return item >= 5;
    });
    return numbers;
  }

  console.log(fiveAndGreaterOnly([1, 2, 3, 4, 8]));




  // Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
    var result = arr.filter(function(item){
        return item % 2 === 0;
    });
    return result;
  }
console.log(evensOnly([4, 3, 7, 6]));



/**
 * Give a list of students, filter out non-female 
 */
var members = [{
    name: 'Lan',
    gender: 'female'
  },
  {
    name: 'Linh',
    gender: 'female'
  },
  {
    name: 'Trung',
    gender: 'male'
  },
  {
    name: 'Peter',
    gender: 'gay'
  }
];

function filterOutFemales(members) {
  var student = members.filter(function(item) {
    if (item.gender !== 'female')
      return item;
  });
  return student;
};
console.log(filterOutFemales(members));


