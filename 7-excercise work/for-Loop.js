// Kiểm tra bên trong mảng có tồn tại một giá trị xác định hay không 
var array;
var value;
function has(array, value) {
  for (var i = 0; i <= array.length; i++) {
    if (array[i] === value) return true;
  }
  return false;
}
has ([2, 3, 4, 5], 4);


// Tính tổng giai thừa của một số nguyên 
function factorials (numbers){
    var factors = 1;
     var sum = 0;
       for (var i=1; i <= numbers; i++){
        factors *= i;
        sum += factors;
     }
   
    return sum;
   }
factorials(5);
   

/**
 * Viết hàm calculate trả về tích các số từ start đến end, không tính end 
 * Ví dụ: calculate(2, 5) trả về kết quả 24 (vì 2 * 3 * 4 = 24)
 */
function caculate(start, end){
    var result = 1;
     for (var i = start; i < end; i++){
       result *= i;
     }
    return result;
   }
   caculate(2, 12);



   // tính tổng của tích của các phần tử của array a với các phần tử của array b.
/**
 * var a = [1, 2, 3];
 * var b = [10, 20];
 * Kết quả mong muốn: 180 // (10 + 20 + 30) + (20 + 40 + 60)
 */
   var a = [1, 2, 3];
   var b = [10, 20];
   
   function sumMultipArray(a, b) {
     var total = 0;
     for (var i = 0; i < a.length; i++) {
       console.log("i>>>>>>", a[i]);
       for (var j = 0; j < b.length; j++) {
         console.log("j>>>>>>", b[j]);
         total += a[i] * b[j];
         console.log("total>>>>>>", total)
       }
     }
     return total;
   }
   sumMultipArray(a, b);


/**
 * Dùng vòng lặp for kiểm tra số nguyên tố.
 * @param {number} x Số cần kiểm tra
 * @return {boolean} Trả về true nếu là số nguyên tố, ngược lại là false.
 */
function isPrimeNumber(x) {
    if (x < 2) return false;
    for (var i = 2; i < x; i++) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  }


/**
 * Dùng vòng lặp for để hiển thị ra màn hình bảng chữ cái abc.
 * Gợi ý: Dùng String.fromCharCode
 * Ví dụ: String.fromCharCode(97)) sẽ trả về ký tự"a" 
 * Tham khảo: http://www.asciitable.com/ để hiểu thêm về mã ascii
 */
function fromCharCode() {
    var result = ''
    for (var i = 97; i < 123; i++) {
      result += String.fromCharCode(i);
    }
    return result;
  }

/**
 * Sử dụng vòng lặp for để tính tổng các số có trong mảng:
 */

function sum(array) {
    var sum = 0;
    for (var i = 0; i < array.length ; i++) {
         sum += array[i];
    }
    return sum;
  }

