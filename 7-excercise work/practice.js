/*
	Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
*/
function removeEnd(arr, n) {
    return arr.slice(0, arr.length - n);
}



/** 
 * Viết function trả về n phần tử đầu tiên có trong mảng.c
 */
function first(arr, n) {
    return arr.slice(0, n);
  };
  // console.log(first([1, 2, 3], 2)); // expect [1, 2]



  /**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Viết hàm multiply nhận vào một mảng numbers, 
 * sử dụng map method và hàm tripple để trả về 1 mảng 
 * gồm các phần tử nhân 3 các phần tử trong mảng ban đầu
 */

function tripple(num) {
    return num * 3;
  };
  
function multiply(numbers) {
    return  numbers.map(function (num){
        return tripple (num);
        
    });
  }
console.log(multiply([1, 2, 3]));