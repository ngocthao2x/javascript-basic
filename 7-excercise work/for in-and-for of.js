/**
 * Điểm khác nhau giữa 2 vòng lặp for...of và for...in, viết code ví dụ
 =====================Do===========================
Sự khác nhau giữa 2 vòng lặp for...of và for...in là:
+ For of:
 - Được dùng gần giống như vòng lặp for truyền thống.
 - Dùng để lặp qua các phần tử trong mảng.
+ For in:
 - Có cấu trúc tương tự for...of nhưng có cánh sử dụng hoàn toàn khác.
 - Dùng để lặp qua các thuộc tính trong một đối tượng 


 /**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */
 
function multiply(arr) {
  var mul = 1;
  for (var number of arr) {
     mul *= number;
  }
  return mul;
}


/**
 * viết hàm has để kiểm tra xem object có tồn tại 1 key xác định hay không
 * Tham số:
 *  - object: object cần kiểm tra
 *  - key: key cần kiểm tra xem có tồn tại trong object không
 * Return:
 *  - true nếu có tồn tại
 *  - false nếu không tồn tại
 */
 
function has(object, key) {
  for (var keys in object){
      if (keys === key) return true;
  }
  return false;
}



/**
 * Giả thiết: numbers là một array các số nguyên
 * Yêu cầu: 
 * - trả về tổng các số, dùng vòng lặp for ... of
 * - nếu array trống trả về 0
 */
function sum(numbers) {
  var total = 0;
  if (numbers.length === 0) return 0;
  if (numbers.length)
    for (var number of numbers) {
      total += number;
    }
  return total;
}


/**
 * Sử dụng vòng lặp for...in để lấy về tất cả các key của object sau, 
 * in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

var apartment = {
  bedroom: {
    area: 20,
    bed: {
      type: 'twin-bed',
      price: 100
    }
  }
};

function getObjectKey(obj, keys) {
  // Write code here...
}// CHƯA HOÀN THÀNH