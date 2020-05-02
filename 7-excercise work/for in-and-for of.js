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