//function tinhtong(a, b, c) {
    //return a % b + c - --a + b-- % ++b;
   // }//không để dấu 
    //var d = tinhtong(5,2,8);
    //console.log('Kết quả tính tổng là: ', d)
function tinhHieu(a, b, c ) {
    return --a * b++ - --a - b-- % c-- + --b;
}
var d = tinhHieu(3, 4, 5);
//console.log('Kết quả của phép tính này là: ', d);
var rectangle = {
    width: 5,
    height: 7,
    area: function() {
        return this.width * this.height; // function lúc này được gọi là methods vì nó được gán với 1 property.
        // Để truy xuất vào 1 property ta phải dùng this.name
    }
};
//console.log('Kết quả là: ', rectangle.area());// nếu chỉ viết area() thì nó sẽ ko xuất ra vì nó không tìm thấy object để thực thi function 
//rectangle.area();
//=>>> Object thì phải dùng console.log, không thể gọi giống như function
var myCat = {
  name: 'Moon',
  age: 1,
  isMale: false,
  weight: 2,
  play: function () {
      console.log('Hello, i\'m playing this ball. I\'m called ', this.name);
  },
  eat: function(mouse) {
  this.weight = this.weight + mouse.weight;
  return this;
  }
};
  var mouse = {
      weight: 0.5
};

//console.log('Before eating mouse: ', myCat.weight)
//myCat.eat(mouse);
//console.log('After eating mouse: ', myCat.weight);

//bài luyện tập tự suy nghĩ : 3
var myTiger={
  name: 'Pink',
  age: 9,
  weight: 90,
  saying : function () {
      console.log('Certainly, i\'ll eat you because i\'m', this.name);
  },
  eat: function(monkey){
      this.weight = this.weight + monkey.weight;
        return this;
  },
  goToTheToilet: function(){ 
      this.weight= this.weight - 2/3 * monkey.weight;
        
  }
};
 var monkey ={weight: 12};
 console.log(myTiger.saying());
 console.log('Before eating the monkey: ',myTiger.weight,'kg');
myTiger.eat(monkey);
 console.log('After eating the monkey: ', myTiger.weight,'kg');
 console.log('Before going to the toilet: ', myTiger.weight,'kg');
myTiger.goToTheToilet();
console.log('After going to the toilet', myTiger.weight, 'kg');
console.log(myTiger);

var a = 5>4;
console.log(a);

for(var i = 9; i>0;i--){
    console.log(i);
}
var pets= [
    {name: 'Turkey', age: 1},
    {name: 'Fish', age: 2},
    {name: 'Cat', age: 1}
];
for(i=0; i<3; i++) {
    console.log(pets[i].name, pets[i].age)
}
var b = 2 * 5;
alert('b');