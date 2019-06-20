/*
var add = (a, b) => a + b;
console.log(add(10, 5));
console.log(add(30, 5));

var addBy2 = x => x + 2;
console.log(addBy2(4));
*/
/*
var x = 5;
obj = {
    x: 10,
    fn: () => {
        console.log('this.x ',this.x);
        this.x = 20;
    }
};
obj.fn();
console.log('Obj.x ', obj.x);
console.log('last: ', this.x);
*/

// *) HOF
var sampleArray = [2, 3, 4, 5];
/*
Array.prototype.forEach2 = function (action) {
    for (let i = 0; i < this.length; i++) {
        action(this[i], i);
    }
};
sampleArray.forEach2(function (x, index) {
    console.log(x);
});
*/

// var newSample = sampleArray.map( x => x * 2);   // 93*2, 54*2 ....;
// console.log('newSample',newSample);

// Array.prototype.map2 = function (action) {
//     let result = [];
//     for (let i = 0; i < this.length; i++) {
//         let x = action(this[i], i);
//         result.push(x);
//     }
//     return result;
// };

/*
Array.prototype.map2 = function (action) {
    let result = [];
    this.forEach2(function (item, index) {
        let x = action(item, index);
        result.push(x);
    });
    return result;
};
let a = sampleArray.map2( x => x * 2);
console.log('a ',a);
console.log('sampleArray ',sampleArray);
*/

/*
var sampleArray = [2, 3, 4, 5];
var check = sampleArray.reduce(function (oldVal, newVal) {
    return oldVal + newVal;
}, 1);
console.log(check);
*/
/*
let result = 0;
for (let i = 0; i < sampleArray.length; i++) {
    result += sampleArray[i];
}
console.log(result);
*/

/*
function Student() {
    let fname = "hello";
    let lname = "world";
    this.getName = () => fname + ' ' + lname;
    this.setName = (n) => {

        name = n
    };
}

var stu = new Student();
stu.lname
// stu.hasOwnProperty('fname');
*/
