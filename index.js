// tutorial14
// control statement 
// conditional control statement and loop control statement
// if else if and else 
// odd and even number 
// var number=14;
// if (number%2==0)
// console.log("even");
// if(number%2!==0)
// console.log("odd");
  

// positive and negative and zero number 
//  var marks=parseFloat(prompt("enter the user marks:"));
//  if(marks>0)
//  console.log("positive");
// if(marks<0)
// console.log("negative");
// // if(marks==0)
// console.log("zero");
// task 4 solutions 
// letter grading system 
// var marks=parseFloat(prompt("enter the users marks:"));
// if(marks>=80&& marks<=100)
// console.log("A+");
// else if(marks>=70&&marks<=79)
// console.log("A");
// else if(marks>=60&&marks<=69)
// console.log("A-");
// else if(marks>=50&&marks<=59)
// console.log("B");
// else if(marks>=40&&marks<=49)
// console.log("C");
// else if(marks>=33&&marks<=39)
// console.log("D");
// else if(marks>=0&& marks<=32)
// console.log("F");
// else
// console.log("invalid");
// tutorial 16 
// program16.1
// var num1=parseInt(prompt("enter the user first number"));
// var num2=parseInt(prompt("enter the user second number:"));
// var num3=parseInt(prompt("enter the user third number:"));
// if (num1>num2&&num1>num3)
// console.log("largest number1"+num1);
// if (num2>num1&&num2>num3)
// console.log("largest number2"+num2);
// else 
// console.log("largest number3"+num3);


// program16.2 vowel or consonant 
// var letter=prompt("enter the user letter:");
// letter=letter.toLowerCase();
// if(letter==="a"||letter==="e" ||letter==="i"||letter==="o"||letter==="u")
// console.log("vowel");
// else 
// console.log("consonant");
// tutorial 17 
// programm17.1 
//  digit spelling word 
// var digit=prompt("enter any digi:");
// if(digit==0)
// console.log("zero");
// else if(digit==1)
// console.log("one");
// else if (digit==2)
// console.log("two");
// else if(digit==3)
// console.log("three");
// else if(digit==4)
// console.log("four");
// else if(digit==5)
// console.log("five")
// else if(digit==6)
// console.log("six");
// else if(digit==7)
// console.log("seven");
// else if (digit==8)
// console.log("eight");
// else if (digit==9)
// console.log("nine");
// else if(digit==10)
// console.log("ten");
// else 
// console.log("invalid");
// using swtich formulla 
// var digit=prompt("enter any digit:");
// switch(digit){
//      case "0":
//         console.log("zero");
//         break;
//         case "1":
//             console.log("one");
//             break;
//             case "2":
//                 console.log("two");
//                 break;
//                 case "3":
//                     console.log("three");
//                     break;
//                     case "4":
//                         console.log("four");
//                         break;
//                         case "5":
//                             console.log("five");
//                             break;
//                             case "6":
//                                 console.log("six");
//                                 break;
//                                 case "7":
//                                     console.log("seven");
//                                     break;
//                                     case "8":
//                                         console.log("eight");
//                                         break;
//                                         case "9":
//                                             console.log("nine");
//                                             break;
//                                             case "10":
//                                                 console.log("ten");
//                                                 break;
//                                                 default:
//                                                     console.log("invalid");
                                                    
// }


// input a letter and check it is vowel or consonant using switch 
// TASK5 
// var letter=prompt("enter the user letter:");
// switch(letter){
//     case "a" :
//         case "e":
//             case "i" :
//                 case "o":
//                     case "u":
//                         console.log("vowel");
//                         break;
//                         case "A" :
//         case "E":
//             case "I" :
//                 case "O":
//                     case "U":
//                         console.log("vowel");
//                         break;
//                         default:
//                             console.log("consonant")
// }


// tutorial 18 


// loop conditional statement 
// for(var x=1;x<=10;x=x+1){
//     document.write("<h1>+rabiul hassan robi+</h1>");
// }
// document.write("end");
// for(var x=2;x<=100;x=x+2){
//     document.write(x);
// }
// document.write("the end ");

// 9..8...7 .6.54321
// for(var x=9;x>=1;x=x-1){
//     document.write(x);
// }
// document.write("the end ");

// tutorial 19;
//  1+2+3+4+5+6+7..100 using for loop
// var sum=0;
// for(var x=1;x<=10;x=x+1){
//     // document.write(x);
//     sum=sum+x;
   

// }
// document.write(sum);
// programm19.1
// var m=parseInt(prompt("enter the user number:"));
// var n=parseInt(prompt("enter the user numbes last:"));
// var sum=0;
// for(var x=m;x<=n;x=x+1){
//     sum=sum+x;
//     // document.write(sum)


// }
// document.write(sum);

// for(x=1;x<=10;x=x+1){
//     var number1=parseInt(prompt("enter the user number:"));
// var number2=parseInt(prompt("enter the user number2:"));
// sum=number1+number2;
// document.write("result="+sum);
// }

// tutorial 20
// programm20.1:
// var x=1;
// var sum=0;
// while(x<=10){
//     sum=sum+x;
//     document.write(sum);
//     x=x+1;
   
// }

// document.write("the end");
// task-6
// write a programm sum of all the numbers that are divisible by 3 and 5 from 1 to 100;
// var i=1;
// var sum=0;
// while(i<=40){
//     if(i%3==0&&i%5==0){
//         document.write(i);
//         sum=sum+i;
//     }
//   i=i+1;
// }
// document.write(sum);
