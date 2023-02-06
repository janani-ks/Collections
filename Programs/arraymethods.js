let arr = [1,2,3,4,6,0];
let arr1 = [12,3,44,5,24,15];
console.log("1.concat() method");
let arr3 = arr.concat(arr1);
console.log(arr);
console.log("--------------")
console.log("2.constructor() method")
let arr4 = ["lion","dog","cat","tiger","monkey","bunny"];
let text = arr4.constructor;
console.log(text);
console.log("--------------")
console.log("3.copyWithin() method")
arr4.copyWithin(3,0,2);
console.log(arr4);
console.log("--------------")
console.log("4.entries() method")
let f = arr4.entries();
for(let x of f){
    console.log(x)
}
console.log("--------------")
console.log("5.every() method")
let  v = arr.every(check)
function check(a){
    return a>4;
}
console.log(v);
console.log("--------------")
console.log("6.fill() method")
arr.fill(2);
console.log(arr);
arr.fill(3,2)
console.log(arr);
console.log("--------------")
console.log("7.filter() method")
let arr5 = arr1.filter(check1);
function check1(a) {
    return a%2==0;
}
console.log(arr5);
console.log("--------------")
console.log("8.find() method")
let x = arr1.find(check4);
function check4(a){
    return a%5==0;
}
console.log(x);
console.log("--------------")
console.log("9.findIndex() method")
x = arr1.findIndex(check2);
function check2(a){
    return a%5==0;
}
console.log(x);
console.log("--------------")
console.log("10.forEach() method")
arr1.forEach(func1);
function func1(a){
    console.log(a+1);
}
arr.forEach(func2);
function func2(a){
    console.log(a+2);
}
console.log("--------------")
console.log("11.from() method")
let arr2=Array.from(arr1,x=>x+x);
console.log(arr2);
console.log("--------------")
console.log("12.includes() method")
console.log(arr4.includes("lion"));
console.log(arr4.includes("lion",5));
console.log("--------------")
console.log("13.indexOf() method")
x = arr4.indexOf("lion", 1);
console.log(x);
console.log("--------------")
console.log("14.isArray() method")
console.log(Array.isArray(x))
console.log("--------------")
console.log("15.join() method")
console.log(arr4.join(" or "))
console.log("--------------")
console.log("16.keys() method")
x=arr4.keys()
for(let a of x){
    console.log(a);
}
console.log("--------------")
console.log("17.lastIndexOf")
console.log(arr4.lastIndexOf("lion"))
console.log("--------------")
console.log("18.length method")
console.log(arr.length)
console.log("--------------")
console.log("19.map() method")
x = arr1.map(func3)
function func3(a){
    return a*3;
}
console.log(x)
console.log("--------------")
console.log("20.pop() method")
arr1.pop()
console.log(arr1)
console.log("--------------")
console.log("21.prototype method")
let arr6 = []
Array.prototype.change = function(a){
    for(let i=0;i<this.length;i++){
        a[i]=this[i].toUpperCase();
    }
}
arr4.change(arr6);
console.log(arr6)
console.log("--------------")
console.log("22.push() method")
arr4.push("tiger");
console.log(arr4);
console.log("--------------")
console.log("23.reduce() method")
x = arr1.reduce(func4)
function func4(a,b){
    return a-b;
}
console.log(x)
console.log("--------------")
console.log("24.reduceRight() method")
x = arr1.reduceRight(func5)
function func5(a,b){
    return a-b;
}
console.log(x)
console.log("--------------")
console.log("25.reverse() method")
arr4.reverse()
console.log(arr4)
console.log("--------------")
console.log("26.shift() method")
arr.shift()
console.log(arr)
console.log("--------------")
console.log("27.slice() method")
x=arr4.slice(3,5)
console.log(x)
console.log("--------------")
console.log("28.some() method")
v = arr.every(check3)
function check3(a){
    return a>4;
}
console.log(v);
console.log("--------------")
console.log("29.sort() method")
arr4.sort()
console.log(arr4)
console.log("--------------")
console.log("30.splice() method")
arr.splice(2,2)
console.log(arr)
arr.splice(2,0,6,1)
console.log(arr)
console.log("--------------")
console.log("31.toString() method")
v=[]
v=arr.toString()
console.log(v);
console.log("--------------")
console.log("32.unshift() method")
arr.unshift(10,14)
console.log(arr)
console.log("--------------")
console.log("33.valueOf() method")
v=arr4.valueOf();
console.log(v);
