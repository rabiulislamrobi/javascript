normal variables print 
var name="rabiul hassan robi";
var age=26;
var cgpa=3.7;
var lang=["bangla","english", "hindi"];
console.log(name);
console.log(age);
console.log(cgpa);
console.log(lang);

tutorial 31 
// object variables syntax 

var friend1={
    name:"saiful islam biplob",
    age:27,
    cgpa:3.88,
    skills:["cprogramming", "java", "networking"],

    
}
console.log(friend1.name);

var friend2={
    name:"hridoy hassan ",
    age:28,
    cgpa:3.78,
    skills:["cprogramming", "java", "application development"],

    
}
console.log(friend2.age)

var friend3={
    name:"rabiul hassan robi",
    age:26,
    cgpa:3.8,
    skills:["cprogramming", "javascript", "web development"],

    
}
console.log(friend3.cgpa);


constructor adding to object 

function Friend(name,age,cgpa, skills){
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.skills=skills;

}
var friend1=new Friend("rabiul hassan robi",26,3.07,["html","css","sass","javascript"]);
var friend2= new Friend("saiful islam biplob",27,3.77,["java","networking","linux"]);
var friend3= new Friend("hridoy hassan ",28,3.66,["java","javascript","backend development"]);
console.log(friend1.name);
console.log(friend1.age);
console.log(friend1.cgpa);
console.log(friend1.skills);

console.log(friend2.name);
console.log(friend2.age);
console.log(friend2.cgpa);
console.log(friend2.skills);

console.log(friend3.name);
console.log(friend3.age);
console.log(friend3.cgpa);
console.log(friend3.skills);


 kibabe constructor er body te funtion use kore splified kora jay code k 
function Friend(name,age,cgpa, skills){
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.skills=skills;
    this.display=function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.skills);

    }
}
var friend1=new Friend("rabiul hassan robi",26,3.07,["html","css","javascript"]);
var friend2=new Friend("saiful islam biplob",27,3.77,["java","networking","others skills"]);
var friend3=new Friend("hridoy hassan",28,3.56,["java","javascript","backend developer"]);


friend1.display();
friend2.display();
friend3.display();


// output:
rabiul hassan robi
tutorial30to40.js:81 26
tutorial30to40.js:82 3.07
tutorial30to40.js:83 (3) ['html', 'css', 'javascript']
tutorial30to40.js:80 saiful islam biplob
tutorial30to40.js:81 27
tutorial30to40.js:82 3.77
tutorial30to40.js:83 (3) ['java', 'networking', 'others skills']
tutorial30to40.js:80 hridoy hassan
tutorial30to40.js:81 28
tutorial30to40.js:82 3.56
tutorial30to40.js:83 (3) ['java', 'javascript', 'backend developer']

// tutorial 32 
var number1=parseInt(prompt("enter first number :"));
var number2=parseInt(prompt("enter the scond number:"));
var number3=parseInt(prompt("enter the third number:"));
var maximumNumber=Math.max(number1,number2,number3);
console.log(maximumNumber);
// OUTPUT: 123  FINAL 3


TUTORIAL33 
GUSSING NUMBER 
var lostNumber=0;
var winNumber=0;
for(var x=1;x<=6;x=x+1){
    var gussNumber=parseInt(prompt("enter the users gussnumber"));
var randomNumber=Math.floor(Math.random()*6) +1;
if(gussNumber==randomNumber){
    console.log("you have won"+randomNumber);
    winNumber++;}
    else{
    console.log("you have lost and my random number was="+randomNumber);
lostNumber++;
}
}
document.write("total winnumber="+winNumber);
document.write("total lost of number="+lostNumber);
tutorial 34 date object and data methods

var date=new Date();
document.write(date+"<br>");
// output:
// Wed Dec 13 2023 15:39:41 GMT+0600 (Bangladesh Standard Time)
var month=date.getMonth();
document.write(month+"<br>"); 
// month er khetre january 0index theke be continue 11 december;
var year=date.getFullYear();
document.write(year+"<br>");
var year=date.getUTCFullYear();
document.write(year+"<br>");
var day=date.getDay();
document.write(day+"<br>");
var dat=date.getDate();
document.write(dat+"<br>");
var date=new Date();
document.write(date+"<br>");

var minute=date.getMinutes();
document.write(minute+"<br>");
var hours=date.getHours();
document.write(hours+"<br>");
var sec=date.getSeconds();
document.write(sec+"<br>");
var hours=date.getUTCHours();
document.write(hours);

output:Wed Dec 13 2023 16:09:09 GMT+0600 (Bangladesh Standard Time)
11
2023
2023
3
13
Wed Dec 13 2023 16:09:09 GMT+0600 (Bangladesh Standard Time)
9
16
9
10


tutorial36 
document.getElementById("heading1").innerHTML="good bye";
document.getElementById("para").innerHTML="lorem";
document .getElementById("heading2").innerHTML="bangladesh";
document.getElementsByTagName("h3")[0].innerHTML="bangladesh is a beautifull country";

document.getElementsByClassName er jono innerhtml index number dite hobe kicu add korte chaile 

queryselector er belay class er khetre . and id er khtre # use korte hobe 
query selectorall er khetre index use korte hobe kono kicu innerhtml er madome add korte chaile 


tutorial 37 
javascript button 
function firstButton(){
    alert("i am button one");
}

function firstButton1(){
    alert("i am button two");
}

function firstButton(){
    var  myQuery=document.querySelector("#para");
    myQuery.innerHTML="button one click done";
    
}

function firstButton1(){
    var  myQuery=document.querySelector("#para");
    myQuery.innerHTML="button two click done";
    
}

 var myPhoto=document.querySelector("#myimage");

function rabiul(){
  
    myPhoto.src="imge/r.jpg";
}
function robi(){
    
     myPhoto.src="imge/robi.jpg";
 }
// tutorial 40 minin project image slider 
var photo=["imge/img3.png","imge/r.jpg","imge/robi.jpg"];
var imgTag=document.querySelector("img");
var count=0;
function previous(){
    count--;
    if(count<0){
        count=photo.length-1;
        imgTag.src=photo[count];
     
        
    }
    else{
        imgTag.src=photo[count];
    }

    
}
var count=0;
function next(){


count++;
if(count>=photo.length){
    count=0;
    imgTag.src=photo[count];
}else{
    imgTag.src=photo[count];
}



}
