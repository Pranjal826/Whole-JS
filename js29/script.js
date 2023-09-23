// var arr=[21,23,44,88,56,78,12,99]
// // var a=arr[0]
// // var b=arr[1]
// // var c=arr[2]
// var [a,b,c,,,d]=arr
// console.log(a,b,c,d)
// var obj={
//     name:"Ravi",
//     age:21,
//     city:"Indore"
    
// }
// var {name,city,age}=obj
// console.log(name,city,age)
// // Print key and value
// for(var key in obj){
//     console.log(key,obj[key])
// }
// // I want only name with key without for loop
// var {name}=obj
// console.log(name)
// var arr=[12,33,55,77,89,55,44,66]
// var arr1=arr.map((e,i)=>e/2);
// console.log(arr)
// console.log(arr1)


// Try catch
// try{
//     var a=2
//     var b=2;
//     var c=a+b
//     console.log(c)
//     if(c%2===0){
//         throw TypeError("Odd value not allowed")
//     }
//     console.log(c)
//     // console.log("hello world")
// }catch(err){
//     console.log(err.name,"=>",err.message)
// }

// console.log("Hello world")


// Promises
// Ajax(Asynchronous Javascript and XML/JSON)-API
fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>res.json())
.then((res)=>console.log(res))
.catch((err)=>console.log(err))