// function skills(name,...s){
//     console.log(name,s)
// }
// skills("John",1,4,5,6,7)
// let arr=[21,34,56,78,90]
// let arr1=[]
// arr.forEach(function(e,i){
//     arr.push
//     console.log(e,i)
// })


// var arr=[1,2,3,5,6]
// arr.push(45,55,78)
// arr.pop()
// console.log(arr)
// arr.shift()
// console.log(arr)
// arr.unshift(22)
// console.log(arr)
//  Add value at any index
// arr.splice(4,3,100)
// console.log(arr)

// var arr=[1,2,3,5,6,7]
// function abc(...s){
//     document.write(s)
// }
// abc(arr)
// function skills(...s){
//     console.log(s)
// }
// skills(1,2,4,5,6,7,8,9,99,5,3,2,44,4,55)

// Spread operator
//  var arr=[1,2,3,4,5,6,7,8,9]
//  var arr1=[...arr,10,11,12,13,14,15]
//  console.log(arr1)

// Map method
// use ?
// 1. To iterate over an array
// 2. To iterate over an array of objects
// 3. To iterate over an array of arrays
// 4. To iterate over an array of functions
// 5. To iterate over an array of numbers
// 6. To iterate over an array of strings
// 7. To iterate over an array of booleans
// 8. To iterate over an array of nulls
// 9. To iterate over an array of undefineds
// 10. To iterate over an array of NaNs
// 11. To iterate over an array of Infinitys
// 12. To iterate over an array of dates
// var arr=[1,2,3,4,5,6,7,8,9]
// var arr1=arr.map(function(e,i){
//    console.log(e*2)
//    return e*2
// })


// console.log(arr1)

// filter method
var arr=[1,2,3,4,5,6,7,8,9]
var arr1=arr.filter(function(e,i){
    return e%2===0
})
console.log(arr1)