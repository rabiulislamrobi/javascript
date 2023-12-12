task -6 tutorial 20
programm20.1

var x=1;
var sum=0;
while(x<=100){
    if(x%3==0&&x%5==0){
        sum=sum+x;
        document.write(x)
    }
    x=x+1;
}
document.write(sum);
output:
153045607590315


tutorial21

programme21.1 for loop

for(var x=1;x<=10;x=x+1){
    document.write(" "+x);
}
output:1 2 3 4 5 6 7 8 9 10
sum=0;
for (var x=1;x<=10;x=x+1){
    sum=sum+x;
    document.write(" "+sum);
}
document.write("totall="+sum);
output:1 3 6 10 15 21 28 36 45 55totall=55


programme21.2 while loop
var i=1;
while(i<=10){
    document.write(" "+i);
    i=i+1;
}
output:1 2 3 4 5 6 7 8 9 10

var i=1;
var sum=0;
while(i<=10){
    // document.write(" "+i)
    sum=sum+i;
    document.write(" "+sum)

    i=i+1;
}
document.write(" total sum="+sum);
output:1 3 6 10 15 21 28 36 45 55 total sum=55


programm21.3 do while loop

var i=1;
do{
document.write(" "+i);
i=i+1;
}while(i<=11);
output:1 2 3 4 5 6 7 8 9 10 11

tutorial22 
programm22.1 for break keyword

for(var i=1;i<=50;i=i+1){
    if(i%50==0){
        break;
    }
    document.write(" "+i)
}
output:1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49

programm22.2 with continue keyword

for(var i=1;i<=100;i=i+1){
    if(i%2==0||i%5==0){
        continue;
    }
    document.write(" "+i);
    
}
 output:1 3 7 9 11 13 17 19 21 23 27 29 31 33 37 39 41 43 47 49 51 53 57 59 61 63 67 69 71 73 77 79 81 83 87 89 91 93 97 99

tutorial video 23
var number=parseInt(prompt("enter the user number:"));
if(number>0)
console.log("positive");
else if(number<0)
console.log("negative");
else 
console.log("zero");

same problem solved to use ternary operator
programm23.1
var number=parseInt(prompt("enter the user number:"));

var result=number>0? "positive": number<0? "negative":"zero";
console.log(result);

programm23.programm23.3 

three user input write a programme and identify the largest value using ternary operator 

var number1=parseInt(prompt("enter the user number1"));
var number2=parseInt(prompt("enter the user number2"));
var number3=parseInt(prompt("enter the user number3"));

var result=number1>number2&&number1>number3? number1 :number2>number1&&number2>number3? number2 :number3;
console.log("largest number="+result);

tutorial24
programme24.1
var number=5;
var division=number*number;
console.log(division);


programme24.2 
 function addition(number1){
    var addition=number1+number1;
    document.write("addition="+addition+"<br>");
 }
 addition(5);
 addition(10);

 function subtraction(number2){
    var subtraction=number2-number2;
    document.write("subtraction="+subtraction+"<br>");
 }subtraction(10);

 function multiplication(number3){
    var multiplication=number3*number3;
    document.write("multiplication="+multiplication+"<br>");

 }multiplication(20);
 function division(number4){
    var division=number4/number4;
    document.write("division="+division+"<br>");
 }division(10);
 function modulus(number5){
    var modulus=number5%number5;
    document.write("modulus="+modulus+"<br>");
 }modulus(50);


programme24.2
function return 
function addition(number1,number2){
    var result=number1+number2;
    return result;
}
var x=addition(5,5);
document.write(x);

tutorial 25
 
iifes=immediate invokeable function expression

(function display(message){
    document.write(message);
})("i love you so much my family <br>");

// task7 solve 

(function sum(number1,number2){
    var sum=number1+number2;
    document.write(sum)
})(5,6);

// function expressions
var display=function displayMessage(msg){
    document.write(msg);
} ;display("i am  muslim");

tutorial 26
array 
programme26.1
var names=new Array(5);
names[0]="masum";
names[1]="shojib";
names[2]="shamim";
names[3]="jubayer";
names[4]="shakil";
document.write(names);
console.log(names);
var length=names.length;
document.write(length);

programmme26.2
var locations=["pubergaon", "koratiya","ranipura","kerabo","tarail","atalapurbazar"];
document.write(locations);
console.log(locations);
console.log(locations.length);
var locations2=["panchrukhi","porinda", "gawsia", "bhulta"];
console.log(locations.concat(locations2));

locations.push("mayerbari");
console.log(locations);

locations2.pop("bhulta");
console.log(locations2);
console.log(locations.concat(locations2));
tutorial 27
programme27.1
var num=[10,20,30,40,50];
var sum=0;
for(i=0;i<=4;i=i+1){
    document.write(" "+num[i]);
    sum=sum+num[i];
}
document.write("totall sum="+sum);

var numbers=new Array();
var sum=0;

for(i=0;i<5;i=i+1){
     numbers[i]=parseInt(prompt("enter the user array number:"));
    document.write(" "+numbers[i]+"<br>");
    sum=sum+numbers[i];

//  document.write(sum);
}
document.write("totall sum="+sum);

tutorial28? 

var names=["masum", "shamim","jubayer","shojib","rayhan","methou","tapos"];
console.log(names);
console.log(names[0]);
var names1=names.shift();
console.log(names);
names.unshift("masum");
console.log(names);
names.splice(1,0,"hridoy");
console.log(names);
// output// ['masum', 'hridoy', 'shamim', 'jubayer', 'shojib', 'rayhan', 'methou', 'tapos']

names.splice(1,5);
console.log(names);
// output['masum', 'methou', 'tapos']

var newArray=names.slice(2);
console.log(newArray);
// output:['tapos'] er jono notun array declared korte hoy 
names.splice(2,0, "masum", "hridoy", "shamim", "shojib","saiful");
console.log(names);
// output:['masum', 'methou', 'masum', 'hridoy', 'shamim', 'shojib', 'saiful', 'tapos']

names.sort();
console.log(names);
oputput:(8) ['hridoy', 'masum', 'masum', 'methou', 'saiful', 'shamim', 'shojib', 'tapos']

programme28.2 number sorted er ennonimus function use kora hoy 
var number=[10,6,100,8,3,5,0];
number.sort(function(a,b){
    return a-b;
})
console.log(number);
// output:(7) [0, 3, 5, 6, 8, 10, 100]
var number=[10,6,100,8,3,5,0];
number.sort(function(a,b){
    return b-a;
})
console.log(number);
output (7) [100, 10, 8, 6, 5, 3, 0]

var names=["shamim","jubayer","masum","azizul","kibriya","ziur","shohrab"];
console.log(names);
// output:(7) ['shamim', 'jubayer', 'masum', 'azizul', 'kibriya', 'ziur', 'shohrab']
names.sort();
console.log(names);
// output: ['azizul', 'jubayer', 'kibriya', 'masum', 'shamim', 'shohrab', 'ziur']
names.reverse();
console.log(names);
// output(7) ['ziur', 'shohrab', 'shamim', 'masum', 'kibriya', 'jubayer', 'azizul']
wrong part starts heres 
function highestScores(scrores){
    scrores(scrores[0]=max);
    if (scrores[0]<scrores[1])
    console.log(scrores[1]);
    else if (scrores[0]<scrores[2])
    console.log(scrores[2]);
    else if (scrores[0]<scrores[3])
    console.log(scrores[3]);
    else if (scrores[0]<scrores[4])
    console.log(scrores[4]);
    else if (scrores[0]<scrores[5])
    console.log(scrores[5]);
return highestScores;

        
    

}
scrores=[20,34,56,67,76,12];
highestScores(scrores);
console.log(highestScores(scrores));
wrong parts end heres 

 function highestScore(scrores){
    var max=scrores[0];
    for(x=1;x<scrores.length;x=x+1){
        if(max<scrores[x]){
            max=scrores[x];
        }




    }
    return max;



 }
 var scrores=[21,28,1,88,15];
 var max=highestScore(scrores);
 console.log(max);
output:88