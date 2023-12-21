// Tutorial 56 programme561 
// console.clear();
// console.log(window);
// console.log(window.location);

// //href
// console.log(location.href);
// //protocol
// console.log(location.protocol);
// //hostname
// console.log(location.hostname);
// //port
// console.log(location.port);
// //path
// console.log(location.pathname);
// programme562
// const selector=document.querySelector(".location-div");
// console.log(selector);
// const para1=selector.children[0];
// para1.textContent=location.href;

// // console.log(para1);
// const para2=selector.children[1];
// para2.textContent=location.protocol;
// const para3=selector.children[2];
// para3.textContent=location.hostname;
// const para4=selector.children[3];
// para4.textContent=location.port;
// const para5=selector.children[4];
// para5.textContent=location.pathname;

// const selectorButton=document.querySelector("button");
// selectorButton.addEventListener("click",function(){
//     location.assign("https://rabiulislamrobi.github.io/final-portfolio/" );
// });

// tutorial 57.1 programmme1

// console.log(window);
// alert("something is wrong");

// confirm("are your sure deleted");

// function confirmValue(){
//    const value= confirm("are you sure delted");
//    if(value){
//     console.log("ok")
    
//    }
//    else{
//     console.log("cancel");
//    }
// }confirmValue();

// function welcomeMessage(){
//     const h1=document.createElement("h1");
//     let text;
//     var name=prompt("enter your name:");
//     if(name==null||name==""){
//         text="no name found";
//     }else{
//         text="wellcome "+name+" my page";
//     }
//     const textnote=document.createTextNode(text);
//     h1.appendChild(textnote);
//     document.body.appendChild(h1);
// }welcomeMessage();

// tutorial 58 programme2 
// setTimeout(()=>{
//     console.log("hello")
// },5000);
// programme2 

// function display(){
//     console.log("rabiul hassan robi");
// }setTimeout(display,3000);

// programme 3 rela life work  setime work
// const selectorButton=document.querySelector(".button");
// const selectorHeading=document.querySelector(".heading");
// selectorButton.addEventListener("click",buttonsubmit);
// function buttonsubmit(){
//     selectorHeading.textContent="save you inromation successfully";
//     setTimeout(()=>{
//     selectorHeading.textContent=" ";
//     },5000);
// }
//    setInterval programmer3 
// const selectorButton=document.querySelector(".button");
// const selectorHeading=document.querySelector(".heading");

// selectorButton.addEventListener("click",displaycount);
// function displaycount(){
//     let count=0;
//     selectorHeading.textContent=count;

//     setInterval(()=>{
//         count++;
//         selectorHeading.textContent=count;
//     },5000);

// }



// programme 49
// create a clock 
// const selectorButton=document.querySelector(".button");
// const selectorHeading=document.querySelector(".heading");
// selectorButton.addEventListener("click",starclock);
// function starclock(){
//     var date = new Date();
//     var hours=date.getHours();
//     var minute=date.getMinutes();
//     var sec=date.getSeconds();

//     minute=formattime(minute);
//     sec=formattime(sec);
//     var time=hours+":"+minute+":"+sec;
//     selectorHeading.textContent=time;
//     setInterval(starclock, 1000);
// }
// function formattime(value){
//     if(value<10){
//         value="0"+value;
//     }
//     return value;

// }

// tutorial 60 

// 1.Best practice 
// 2.use camel case for naming 
// 3.variable declaration on top and initialize 
// 4.avoid unnessary variables
// 5.switch ,case ,default allayws default use Kora
// 6.object and array with const 
// 7.comaprision er belay three assign operator use kora 
// 8.access dom less 


// tutorial 61 
// try{
//     alert("hello bangladesh ");
//     alert(x);
// }
// catch(e){
//     alert("rabiul hassan robi");
//     console.log(e);
// }
// finally{
//     document.write("pubergaon");
// }

// tutorial 62 error handling 
// try{

// }catch(){
   
// } finally{

// }
// throw use korte pari condition thakle 

// tutorial 63 
// var c=document.getElementById("myCanvas");
// var ctx=c.getContext("2d");
// // newContext.fillStyle="green";
// ctx.fillRect(10,10,380,280);

// tutorial 64 ES6

// turorial 65 hoisting and strict modde 

// tutorial 66 
// default parameter 
// function message(msg="puberaon ,atlapur, raupganj "){
//     document.write(msg);
// }
// message("rabiul hassan robi");
// message();


// // rest parameter using javascript  
// console.clear();
// function printNumbers(x,y){
//   console.log(`${x},${y}`);
// }printNumbers(30,40);


// // using rest parameter 
// console.clear();
// function userFunction(a,b,...z){
//     console.log(`function a=${a},function=${b},rest function=${z}`);
// }userFunction(10,20,30,40,50);

// tutorial 67 
// programme 1
// function arrayFunction(x,y,z){
//     return x+y+z;
// }
// let arrayNumbers=[10,5,6];
// // console.log (arrayFunction(...arrayNumbers));
// let arrayNumbers2=[20,15,16];
// let totall=[...arrayNumbers,...arrayNumbers2];
// console.log(totall);

// // noraml concatination 
// let x=[1,2,3,4];
// let y=[4,5,6,7];
// let xy=x.concat(y);
// console.log(xy);


// // using spred operator concatiniatiion 
// let a=[10,20,30,40];
// let b=[4,5,5,6,7];
// let ab=[...a,...b];
// console.log(ab);


// // spred operator with  object 

// let m={
//     name:"rabiul hassan robi",
//     age:27,
//     university:"commilla university",
// }
// let n={
//     profession:"student",
//     passion:"programmin and web development",

// }
// let mn={...m,...n};
// console.log(mn);

// tutorial 68 
// object literals 


// function message(name,age){
//     return{
//         name:name,
//         age:age,
//     }
// }console.log(message("robi",26));

// let object={
//     body:function(){
//         return ' robiul hassan robi'
//     }
// }
// console.log(object.body());

// using consizing er madome aro chot and korte pari code ta 
// let object={
//     body(){ //function chara o lekha jay in this program 
//         return ' bangladesh'

//     }
// }
// console.log(object.body());



// amra chaile  eibhabe o funtion nam declared korte pari 
// let object={
//     'body name'(){
//         return 'pubergaon';
//     }
// }
// console.log(object['body name']());

// tutorial video 70 

// var numbers=[10,20,30,40,50];
// for (var x=0;x<numbers.length;x=x+1){
//     console.log(numbers[x]);
// }
// console.log("first part the end ");
// // for each function with array 
// var numbers=[10,20,30,40,50,60];
// numbers.forEach(myNubers);
// function myNubers(a){
//     console.log(a);
// }

// console.log("the end ");

// var num=[100,200,300];
// num.forEach(function(x){ //simply annonimus function use kore code takora jabe 
//     console.log(x);
// });
// console.log("third part end is here"); 

// // supose akta array dawa ace ake square korte hobe 
// var numbers=[12,23,44,5];
// var squareValues=[];
// numbers.forEach(function(x){
//     squareValues.push(x*x);
// });
// console.log(squareValues);

// // amra chaile function double para meter use korte pari 

// // spouse akta varibale dawa ace eikhane 5 kora add korte 
// var numbers=[10,25,30,35,45,3];
// numbers.forEach(function(a,index,array){
//     array[index]=a+5;

// });
// console.log(numbers);
// console.log("end the tutorial part 71");

// // tutorial 71
// console.clear();
// var numbers=[10,3,4,5];
// squareNumbers=[];
// numbers.forEach(function(x){
//     squareNumbers.push(x*x);
// });
// console.log(squareNumbers);

// // map() er madome oporer programme kibhabe kora jay 
// // map() function receive kore  and new value return kore new array declared kore
// console.clear();
// var numbers=[21,3,54,6];
// squareNumbers=numbers.map(function(x){//using map function
//     return x*x;
// });
// console.log(squareNumbers);
// console.log(numbers);

// // filter() function 
// console.clear();
// var numbers=[10,20,30,23,45,67];
// var newNumbers=numbers.filter(function(x){
//     return x>=10&&x<30;
// });console.log(newNumbers);


// // tutorial 72


// function display(){// using traditional function
//     console.log("i display one")
// }display();


// // using arroy function 
// const display2 = () => 
//     console.log("i display two");

// display2();

// console.clear();
// // traditional function and  arroy function return value 
// function name(){//using trandiitonal function
//     return "rabiul hassan robi my name"
// }
// console.log(name());

// const name2=()=>{ //usiing arrroy function
//     return "robi my nickname";
// }
// console.log(name2());



// // arroy function and traditional function kibabe parameter pass korte hoy 
// function additiion(number1,number2){
//     return number1+number2;

// }
// console.log(additiion(30,40));

// const additiion2=(number1,number2)=>{
//     return number1+number2;
// }
// console.log(additiion2(23,7));

// const additiion3=(number1,number2)=>
//      number1+number2;//return and {} karli break use kora chara  arroy funtion declared kora jay but mone rakhte hobe return jodi use na kora hoy thole karlie break use kora jabe na 
//      //para one value parenthesis break use na korle hobe but khali and ek er odik thakle parenthesis ba () first break use korte hobe 

// console.log(additiion3(2,7));

// tutorial 73


// var friends=[
//     {
//         name:"rabiul hasan robi",
//         age:26,
//         cgpa:2.7
//     },
//     {
//         name:"saiful" ,
//         age:27,
//         cgpa:3.70
//     },

//     {
//         name:"hridoy",
//         age:28,
//         cgpa:3.89,

//     }
//     ,
//     {
//         name:"faysal",
//         age:26,
//         cgpa:3.3
//     }
// ];
// console.log(friends);
// function friendsName(){//using traditional function
//     return friends.filter(function(x){
//         return x.cgpa>3;

//     }).map(function(Y){
//         return Y.name;

//     });

// }
// console.log(friendsName());

// const friendsName1=()=>
//     friends .filter((x)=>x.cgpa>3).map((y)=>y.age);


// console.log(friendsName1());

// tutorial video 74
// destructure  (array destructure)
// let numbers=[10,20,30.40,50];
// let [num1,num2,num3,num4,num5]=numbers;
// console.log(num1);


// let numbers1=[23,45,434,43,7,8];
// let[numb1,numb2,...z]=numbers1;//using spread sheet 
// console.log(...z);
// // swap variable 
// console.clear();
// // swap variable using destructure
// let a=10;
// let b=7;
// [a,b]=[b,a];
// console.log("a="+a);
// console.log("b="+b);
// console.clear();

// // object destracture 
// const friendInfo={
//     nam:"saiful ",
//     id:1,
//     locatiion:"khanchon",
//     cgpa:3.77
// }
// // console.log(friendinfo.id);
// // console.log(friendinfo.name);
// // console.log(friendinfo.location);
// // console.log(friendinfo.cgpa);
// const {nam, id, locatiion,cgpa}=friendInfo;
// console.log(nam);
// console.log(id);
// console.log(locatiion);
// console.log(cgpa);

// // programme2 
// // nested object destructured
// const brotherInfo={
//     name:"hanif",
//     age:30,
//     profession:"student",
//     degree:{
//         masters:"accounting",
//         bped:"physical education"
//     },
// }
// //destuctured
// const{name,age,profession,degree}=brotherInfo;
// console.log(name);
// console.log(degree.masters);

// // destructuring function  parameter 
// const brotherInfo1=({name,id,cgpa})=>{//arroy function
//     console.log(`${name},${id},${cgpa}`);
// }
// const brother={//brother object
//     name:"hanif",
//     id:1,
//     cgpa:3.33,

// }
// brotherInfo1(brother);

// let numbers=[10,20,30,31,40,50];
// const oddNumbers=(x)=>{
//     if(x%2===1){
//         return x;
//     }
// }
// // console.log(oddNumbers());
// // console.log(numbers.find(oddNumbers));
// let final=numbers.find(oddNumbers);
// console.log(final);
// let final1=numbers.findIndex(oddNumbers);
// console.log(final1);


// object er sathe find ana findindex er baboher 

const student=[
    {
        name:"rabiul",
        id:101,
        cgpa:3.50
    },
    {
        name:"jubayer",
        id:101,
        cgpa:3.50
    },
    {
        name:"shojib",
        id:101,
        cgpa:4.50
    }


]
const newstudents=student.find(x=>x.cgpa<4);
console.log(newstudents);
// const newstudents1=student.findIndex(newstudents);
// console.log(newstudents1);
