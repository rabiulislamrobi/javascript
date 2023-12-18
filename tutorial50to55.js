tutorial 51
console.clear();//mouse event
const selector=document.querySelector("div");
// console.log(selector);
// //onclick
selector.addEventListener("click",function(){
    console.log("click is occured");
});
selector.addEventListener("click",function(event){
    // console.log("click is occured");
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.className);
    console.log(event.target.innerHTML);
});
const button=document.querySelectorAll(".btn");
   console.log(button);
   Array.from(button).map(button=>{
    button.addEventListener("click",function(event){
        console.log(event.target.innerText);
    });
   });

//double click
selector.addEventListener("dblclick",function(){
    console.log("dblclick is occured");
})
//mouse down 
selector.addEventListener("mousedown",function(){
    console.log("muserdown is occured");
})
//mouse up
selector.addEventListener("mouseup",function(){
    console.log("mouseup is occured");
})
//mouse enter is occured jokhon mouse enter kora hobe tokhon show korbe 
selector.addEventListener("mouseenter",function(){
    console.log("mouseenter is ocurred")
});
//mouse jokhon soriye nawa hove tokhon show korbe
selector.addEventListener("mouseleave",function(){
    console.log("mouse leave is occurred");
});
//mousemove
selector.addEventListener("mousemove",function(){
    console.log("mousemoveer is occured");
});
//mouseover
selector.addEventListener("mouseover",function(){
    console.log("mouse over is occureed");
});
//windows er 7a compare kore x value and y value
 selector.addEventListener("mousemove",function(e){
    console.log("mouse move"+e.clientX);
 });
// div element  er 7a compare kore y value 
 selector.addEventListener("mousemove",function(e){
    console.log("offsetx="+e.offsetX+",offsety="+ e.offsetY);
 });

tutorial 52 keyboard event

const selector=document.querySelector("textarea");
// console.log(selector);
selector.addEventListener("keydown",function(e){
    // console.log("keydown");
    if(e.repeat){
        alert("no repeat");
    }
});
selector.addEventListener("keypress",function(){
    console.log("keypress");
});
selector.addEventListener("keyup",function(){
    console.log("keyup");
});
 selector.addEventListener("keyup",function(event){
    console.log(event.shiftKey);
 });
 selector.addEventListener("keyup",function(event){
    if(event.shiftKey){
        console.log("shift +" + event.key);
    }
 });

tutorial 53
variable 
const input=document.querySelector("input");
blur
input.addEventListener("blur",function(event){
    console.log("blur");
// })
input.addEventListener("blur",function(event){
    // console.log(event.target.value);
 input.value=event.target.value.toUpperCase();
 console.log(input.value);
})
console.log(input);
focus 
input.addEventListener("focus",function(){
    // console.log("focus");
    input.style.backgroundColor="red";
})
focusin
input.addEventListener("focusin",function(event){
    console.log("focusin");
})
//focusout
input.addEventListener("focusout",function(){
    input.style.backgroundColor="aqua";
});
tutorial54



var input=document.querySelector("input");
input.addEventListener("copy",function(){
    inputp.innerHTML="you have copy";
});
input.addEventListener("cut",function(){
    inputp.innerHTML="you have cut";
});
input.addEventListener("paste",function(){
    inputp.innerHTML="you have paste";
})

var inputp=document.querySelector("p");

tutorial 55
const div=document.querySelector("#first-div");
const para=document.querySelector("#para");


