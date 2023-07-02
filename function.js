/*
 FUNCTIONS
   a function is a process which takes input,which we call arguments/parameters and returns an output based on that
syntax:
 function functionName (parameters){
    //function logic
    return the output
 }
  functionName(parameters)

  code
 function anitha(){
    console.log("she is studying")
}
anitha();she is studying

 passing with parameters and arguments
 function anitha(num1, num2)
 {
    console.log(num1 + num2)
}
anitha(3, 4);7

using return(we mostly use return instead of console)
function add(num1=2,num2=3){
    return num1+num2;
}
console.log(add(2,8));10-(argument will override parameter value)

using arrow function
const sub=(num1,num2)=>{
    return num1-num2;
}
console.log(sub(5,4));

also simply write like below(remove return and brackets)
const add=(num1,num2) =>num1+num2;
console.log(add(3,4))7

when using single parameter(just remove second parameter and brackets )
const add=num1 =>num1+3;
console.log(add(4))




 1.every function should begin with the keyboard function,followed by a user defined function name.
 2.function name should be unique like const and let
 3.we can pass parameters/arguments inside the bracket.it can have as many arguments as you want,but more than two arguments needs to be seperated by coma
 4.parameters name should be unique as well
 5.function logic should be enclosed in a block scope,ie {}.
 6.block scope when inside function is called functional scope

RECURSIVE FUNCTION

recursion is a technique we use to solve problems by creating a function that calls itself until the function arhieves the required output

1. you need to pass a condition which will stop this function from running after a specific time
2. any problem that needs recursion to solve can be solved using loops

//named function//
 const hello=function functionname(){
 console.log('hello)
 }
 hello()

creating a function as an expression and storing it in a variable/
we cannot call the function by its name
we can only call that function by its variable name 

 //anonymous function

 const hi=function(){
    console.log('hi')
 }
 hi()

 IIFE-Immediately invoked function expression
 (function something(){
    console.log('iife')
 })()

 Higher order function

 a function that can either take another function as parameter or can return a function as output

function calculate(func1, func2, num1, num2)
var func1=function sum(num1, num2){
    return num1+ num2
}
var fun2function multiply(num1, num2){
    return num1* num2
}
 var num1=5
 var num2=10

 const add=func1(num1,num2)//15
 const multiplyfunc2(num1,num2)//50
 const res= multiply-add//50-1535
 console.log(res)
}
calculate (sum,multiply,5,10)

PURE FUNCTION
  a function which gives the same output every time if given the same input

let val=5

function add(num, num2){
    console.log(num+num2)
}
function incrementval(num){
    val=val+num
}
incrementval(4)
console.log(val)

CLOSURE

A closure is the combination of a function with references to the state that surrounds it (the lexical environment). In other words, a closure gives you access to the scope of an external function from an internal function. In JavaScript, closures are created every time a function is created, at the time of function creation.

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();


















*/

!