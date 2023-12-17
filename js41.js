
// tutorial 41
// programme41.1

// function start(){
//     var myStart=document.querySelector("#heading1");
//     myStart.classList.add("heading1");
// }
// function remove(){
//     var myRemove=document.querySelector("#heading1");
//     myRemove.classList.remove("heading1");

// }
// tutorial 42 
// programme42.1

// var buttonSelector=document.querySelector("button");
// buttonSelector.addEventListener("click",myFuction);
// function myFuction(){
//     alert("hello bangladesh");
// }
// programme42.2

// var seltector=document.querySelector("h1");
// seltector.addEventListener("mouseover" , function(){
//     seltector.classList.add("heading2");
    

// });
// seltector.addEventListener("mouseout" , function(){
//     seltector.classList.remove("heading2");
    

// });

// programme43.2 
// without for loop
// var selector=document.querySelectorAll(".myButton")[0].addEventListener("click",function(){
//     var text=this.innerHTML;
//     document.querySelector("h1").innerHTML=text + "is clicked";
// });
// var selector=document.querySelectorAll(".myButton")[1].addEventListener("click",function(){
//     var text=this.innerHTML;
//     document.querySelector("h1").innerHTML=text + "is clicked";
// });
// var selector=document.querySelectorAll(".myButton")[2].addEventListener("click",function(){
//     var text=this.innerHTML;
//     document.querySelector("h1").innerHTML=text + "is clicked";
// });


// programme43.2 with for loop; 

// var len=document.querySelectorAll(".myButton");
// for(var i=0;i<3;i=i+1){
//     var selector=document.querySelectorAll(".myButton")[i];
//     selector.addEventListener("click",function(){
//         var text=this.innerHTML;
//         document.querySelector("h1").innerHTML=text+"is clicked now";
//     })
// };


// programme44.1

// for(var i=0;i<=3;i++)
// {
//     document.querySelectorAll(".button")[i].addEventListener("click",function(){

//     var text=this.innerHTML;
//     console.log(text);
//     newaudio(text);
//     newanimation(text);

// });
// }
// function newaudio(text){
    
//     switch(text){
//         case "a":
//             var audio=new Audio("islamicwaz/1.mp3");
//             audio.play();
//             break;
//         case "b":
//             var audio=new Audio("islamicwaz/2.mp3");
//             audio.play();
//             break;
//         case "c":
//             var audio=new Audio("islamicwaz/3.mp3");
//             audio.play();
//             break;
//         case "d":
//             var audio=new Audio("islamicwaz/4.mp3");
//             audio.play();
//             break;
        
//     }
// }
// function newanimation(text){
//     var selectorbutton=document.querySelector("."+text);
//     selectorbutton.classList.add("button2");

//     setTimeout(function()  {
//         selectorbutton.classList.remove("button2");
        
//     }, 100000);
// }

// document.addEventListener("keypress" , function(event){

//     var text=event.key;
//     newaudio(text);
//     newanimation(text);

// });


// tutorial46 programme2
 
// document.addEventListener("keypress",function(event){
//     var key=event.key;
//     document.querySelector("p").innerHTML="you click is ="+key;

// });
// var count=0;
// document.querySelector("#click").addEventListener("keypress",function(event){
//     var key=event.key;
//     count=count+1;
//     document.querySelector("p").innerHTML="textlength="+count;

// });
// tutorial 47 programme1
// var value=document.querySelector("input");
// value=addEventListener("change",changeHandler);


// function changeHandler(c){
//     console.log(c.type);//type daher jono 
//     console.log(c.target);//element dakher jono
//     console.log(c.target.value);
// // }

// programme 472
// const selector=document.querySelectorAll("input[name=checkbox]");
// console.log(selector);
// Array.from(selector).map((checkbox)=>{
//     checkbox.addEventlistner("change",programe);
// })
// function programe(e){
   
//     if(e.target.checked){
//         console.log("checked");
//     }

// }
// tutorila 48 wrong problem
// const form=document.querySelector("form");
// const name=form.querySelector("div #name");
// const email=form.querySelector("div #email");
// const password=form.querySelector("div #password");
// form.addEventListener("submit",formHandler);
// function formHandler(e){
//     e.preventDefault();
    
//     console.log(name.value);
// }
// tutorial 49 load and onload
// window=addEventListener("load" ,function(){

//     console.log("load");
// });
// window.addEventListener("unload",function(){
//     console.log("unload");
// });
// tutorial 50 

// const details=document.querySelector("details");
// details.addEventListener("toggle",function(e){
// console.log(e.target.open);
// });
