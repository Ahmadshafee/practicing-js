funtion varTest(){
    var x =1;
    if(true) {
        var x =2;
        console.log(x);
    }
    console.log(x);
}
varTest()

funtion es6Test() {
    let x = 1;
    if(true) {
        let x = 2;
        console.log(x);
    }
    console.log(x);
}
es6Test()

//functions
function add(a,b) {
    return a + b;
}

add(1,2);

//FE
var add1 = function(a,b){
    return a + b;
}
add1(1,2);

//ES6 arrow function
const add2 =(a,b) => {
    return a + b;
}

//one statement
const add3 = (a,b) => a + b;

//conditional - if, ifelse, switch
function demo(x, y, z){

    if(y=== undefined) {
        y - 0;
    }
    if( z === undefined) {
        z = 0;
    }

     return x + y + z;
    
};

let res1 =demo(18, 20);

const demo2 = (a, b =20, c=30) => {
    return a + b + c;
}

const result = demo2(10);
console.log(result);

//string concatination

var name = 'ras';
var greeting = 'happy birthday';

var message = greeting + name + ` have a great day`;
console.log(message);

//template literals
const mes=`${greeting} ${name} have a great day`
console.log(mes);

// Arrays

const arr =[2,3,4,5];
const arr1 = [];
for(let i=0; i <= arr.length -1; i++) {
    arry2.push(arr[i]*2)
}
console.log(arr1);
//map
const test=arr.map((item)=>{
    return item*2;
})
console.log(arr);
console.log(test);
