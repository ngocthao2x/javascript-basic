// // Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// function fiveAndGreaterOnly(arr) {
//     var numbers = arr.filter(function(item){
//         return item >= 5;
//     });
//     return numbers;
//   }
// console.log(fiveAndGreaterOnly([1, 2, 3, 4, 5, 6]));  



// // Given an array of numbers, return a new array that only includes the even numbers.
// function evensOnly(arr) {
//     var result = arr.filter(function(item){
//         return item % 2 === 0;
//     });
//     return result;
//   }
// console.log(evensOnly(1, 3, 5, 8));  //TypeError: arr.filter is not a function      



// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
function findFirstEvenNumber(array) {
  var soChan = array.find(function(item) {
    return item % 2 === 0;
  });
  if (soChan === 0) return 'underfind';
  if (soChan !== 0) return soChan;
  
};
console.log(findFirstEvenNumber([1, 2, 3, 4]));
  

