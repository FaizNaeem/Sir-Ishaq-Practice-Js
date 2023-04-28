// generateTableOfTwo(2)
// var user = prompt("enter table num");
// var user_end = prompt("end num");
// for(var i =1; i<=user_end; i++){
//   document.write(user+ " x "+ i +"=" +user*i +"<br>")
// }
// function add (num1,num2){
// return num1+num2 ;
// }
// let safe = add(10,10);
// console.log(safe)
// function datew(data,time){
// document.write(data+"<br>")
// if(time>0){
//   datew(data ,time-1)

// }
// }
// datew("Hello",5)
// function factorial(num){
// if(num>1){
//   return num*factorial(num-1);
// }
// return 1;
// }
// console.log( factorial(5));
// var arr = [1,2,3,4]
// arr.forEach(function(value ,index){
// console.log(value ,index)
// })
// filter 
// var arr = [1,2,3,4,5,6,7,8,9,10]
// var store = arr.filter(function(value){
// return value %2 ===0;
// });
// console.log(store,arr)
// var arr = [1,5,3,4,2,6,7,8,9,10];
// var store = arr.sort(function(a,b){
// if(a > b){
//     return 1;
// }
// else{
//     return -1;
// }
// });
// console.log(store)
// var arr = [1,2,3,4,5,6,7,8,9,10]
// var store = arr.reduce(function(prev,cur){
// return prev+cur;
// },0);
// console.log(store)
// var arr = ["Muhammad", "Faiz","Naeem"]
// var store= arr.reduce(function(prev,cur){
// return prev+" "+cur
// },"");
// console.log(store)
// let nam=document.getElementById("faiz");
// nam.innerHTML="<center><p>Faiz Naeem</p></center>"
// setInterval(function(){
// let color = Math.round(Math.random()*1000000)
// let color1= Math.round(Math.random()*1000000)
// nam.style.backgroundColor="#"+color
// nam.style.color="#"+color1

// },500)
// let date = new Date()
// let arr =["jan","feb","mar","Apr",]
// document.write(arr[date.getMonth()])
// var birthday= new Date()
//  birthday.setDate(+prompt("Enter Your Birthday Date"))
// birthday.setMonth(+prompt("Enter Your BirthDay Month"))
// birthday.setFullYear(2023)
// birthday.setHours(0)
// birthday.setMinutes(0)
// // console.log(birthday);
// let current = new Date()
// let get=  birthday.getTime()- current.getTime()
// document.write("My BirthDay Left only "+(get/(1000*60*60*24)).toFixed(0)+" Day")
// var birthday= new Date();
//  birthday.setDate(+prompt("Enter Your Birthday Date"));
//  birthday.setMonth(+prompt("Enter Your BirthDay Month"));
//  birthday.setFullYear(+prompt("Enter Your BirthDay Year"))
//  birthday.setHours(+prompt("Enter your birthday hours"));
//  birthday.setMinutes(+prompt("Enter your birthday minutes"));
//  let g = new Date();
//  let get = g.getTime() -birthday.getTime();
//  document.write("you lost "+(get/(1000*60*60)).toFixed(0)+" minutes"+"<br>")
//  document.write("you lost "+(get/(1000*60*60*24)).toFixed(0)+" Days"+"<br>")
//  document.write("you lost "+(get/(1000*60*60*24*30)).toFixed(0)+" month"+"<br>")
//  document.write("you lost "+(get/(1000*60*60*24*365.25)).toFixed(0)+" years")
 