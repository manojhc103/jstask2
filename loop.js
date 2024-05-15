// ==============================================MANOJ GURJAR=========================================


// While loop

// Sintex:-
// while(starting Point<=ending point){
//     Task 
//     increment/decrement
// }


// ----------------------------- 1. How to print all element of a string -----------------

let str="jaipur"
let i=0

while(i<str.length){
    console.log(str[i])
    i++
}

// --------------------horizental print---------------------
// let str="jaipur"
// let i=0
// bag=""

// while(i<str.length){
//     bag=bag+str[i]+""
//     i++
// }
// console.log(bag);

// ------------------------------- 2. how to print all element of an array----------

let arr=[1,2,3,4,5]
let a= 0
while(a<arr.length){
    console.log(arr[a]);
    a++
}

// ----------------------horizontal print---------------

// let arr=[1,2,3,4,5]
// let a= 0
// bag=""
// while(a<arr.length){
//     bag=bag+arr[a]+""
//     a++
// }
// console.log(bag);

// ---------------------------- 3. how to print sum of all element of an array---------------

let arr1 =[1,2,3,4,5]
let b=0
let sum=0

while(b<arr1.length){
    sum=sum+arr1[b]
    b++
}
console.log(sum);