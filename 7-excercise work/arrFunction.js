var dog = {
    bark : function (cry) {
        console.log ('woof woof');
        cry();
    }
 };
 var beSad = function (){
        console.log("huhuhhu");
    };
 
console.log(dog.bark(beSad));


var rectangles = [
    {w: 10, l: 5},
    {w: 8, l: 4}
];
var acreagThose = rectangles.map (function (z){
    
});
console.log(acreagThose);