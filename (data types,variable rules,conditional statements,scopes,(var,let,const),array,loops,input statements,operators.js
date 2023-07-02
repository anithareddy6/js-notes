/*   

 INPUT STATEMENTS

 1.PROMPT
 prompt('what is your name')-it will get input by dispalying popup and store it in variable
 console.log(firstname)-entered input will display in console
 2.CONFIRM
 var firstname=confirm('are you happy')-display popup
 console.log(firstname)-if ok is clcked then it will display true in console and  cancel means false

 */

/*
DATA TYPES-->primitive and reference

1.primitive-it is basic datatype.its size is fixed.variable will directly contain value.size remains fixed
we have  several data types like
 string
 number
 boolean-true or false
 undefined-no value has been added to your particular datatype
 null-it has nothing
 symbol

2. reference-its size is not fixed.it will not directly store value instaed of that it will store in memory address
we have  several data types like
 object-key value pair
 array
 function
 date
 math
 regex
 json

*/


/*
VARIABLE

when writting like below,we have certain RULES .they are
  var firstname = 'anitha';

RULES

 1. Variable name (firstname) cannot start with number  eg: var 1first
 2. Variable name (firstname) cannot start with specail characters  eg var first-name
 3. Variable name (firstname) cannot have spaces  eg. var first name 
 4. Variable name (firstname) cannot have specail characters
 5. Variable name (firstname) cannot have reserve keywords eg: var-->var var='hello'
 6 .variable name are case sensitive
 7.start using _,$ or can use any uppercase,lowercase,or whatever case we want

 */


/* 

 STRING

  can be added as " " or ' '  or backtick symbol
  var shopname = 'anitha\'s shop'-->\backslash symbol is used to ignore or escape or otherwise we can add double quotes at both sides
  string is always immutable(can not change),mutable means change
  position starts with 0 and ends with length-1
  position is called index

CODE
  var firstname = 'anitha';
  firstname.charAt(4)
  firstname.indexOf('a')
  firstname.lastIndexOf('a')
  
OUTPUT
  console.log('hello class')--afterlive  inspecting and seeing sources and  in console it will display hello class 
  console.log( firstname.lastIndexOf('a'))--it will show as 5 by position 
  console.log( firstname.indexOf('a'))--it will show 0 because a is in 0 position
  console.log( firstname.charAt(4))--it will show h  by starting count a as 0 ,1 ,2 like that

 By doing these above things,these are the  one  of way to get  javascript output in the browser
 another way is run through terminal to get the output and type node script.js or any file name which we saved

*/


/*OPERATORS

1.Arithmetic

var num1=4
var num2=2

 addition(+)
console.log (num1+num2)--result will show as 6
 Subtraction(-)
console.log (num1-num2)--result will show as 2
 Multiplication(*)
console.log (num1*num2)--result will show as 8
 Division(/)
console.log (num1/num2)--result will show as 2
 Reminder(%) use this to check ifa number is odd,even,positive or negative
console.log (num1%num2)--result will show as 0

 Increment(++)
 var num1=20
 num1++ ie(num1=num1+1)
 console.log (num1)-it will show as 21
  Decrement(--)
 var num1=20
 num1--  ie(num1=num1-1)
 console.log (num1)-it will show as 19

2.Assignment

concatanation-means when adding string and number ie) '2' and 5 it will show as 25 but in subtraction i will show normal
also concatenation means merging two strings
(=)
var num1='20'
var num2= 5
num1=num1+7 or 
console.log (num1)-display 207
var num1='20'
var num2= 5
num1=num1-7
console.log (num1)-display 15

(+=)
var num1=20
var num2= 5
num2 += 9
console.log(num1)-show 29(adds 20+9)

(-=)
var num1=20
var num2= 5
num1 -= 9
console.log(num1)-shows 11

(*=)
var num1=20
var num2= 5
num1 *= 9
console.log(num1)-shows 180

(/=)
var num1=20
var num2= 5
num1 /= 5
console.log(num1)-shows 4

(%=)
var num1=20
var num2= 5
num1 %= 5
console.log(num1)

3. comparison operators-true or false

(==)-check two values are true or false
var num1=9
var num2=9
console.log(num1==num2)-shows true

(===)-check two values and their type(numberor string) are true or  false
var num1='9'
var num2=9
console.log(num1===num2)-false because num1 is string num2 is number

(!=)-not equal to
var num1=10
var num2=10
console.log(num1!=num2)-false because num1is equal to num2 see but we put(num1!=num2) so it is false

(!==)
var num1=10
var num2='10'
console.log(num1!==num2)-true same as != logic

<(less than)
var num1=11
var num2=10
console.log(num1<num2)-false

>(greater than)
var num1=11
var num2=10
console.log(num1>num2)-true

(<=)
var num1=11
var num2=10
console.log(num1<=num2)-false

(>=)
var num1=11
var num2=10
console.log(num1>=num2)-true

4.logical operators

! 
var num1=11
var num2='11'
console.log(num1=num2  && ! (typeof num2=='string'))-true 

&&
var num1=11
var num2='11'
console.log(num1=num2  && typeof num2=='string')-true

!!
var num1=11
var num2='11'
console.log(num1=num2  || typeof num2=='string')-true
*/

/*
MATH

Math.random()
var first =Math.random()
console.log(first)-dispaly random number based on 0 to 1

Math.round()
var first =Math.round(4.6)
console.log(first)-dispaly round as 5

var first =Math.floor(Math.random()*20)+1
console.log(first)-Display randomly number between 20.it will not dispaly from 21
//math.random()-dispaly random
 math.random()*20-multiplying by 20
 math.floor(math.random()*20)-then we get random value each time//

 var first =Math.ceil(Math.random()*20)+1
c onsole.log(first)-Display randomly number between 21 not display from 22 

math.abs()
var first =Math.abs(4.6)
console.log(first)-dispaly absolute value as 4.6

Math.ceil()
var first =Math.ceil(3.2)
console.log(first)- 4-calculate greater value and rondup and dispaly

Math.floor()
var first =Math.floor(4.9)
console.log(first)- 4-calculate lesser value and rondup and dispaly

*/

/*
DATE

Date()
var date=new Date()
console.log(date)-displays new date

getDate()
var birthday =new Date('August 19,1975 23:15:30');-entering particuular date data
var date1=birthday.getDate();
console.log(date1);-display 19

  we can add this and get whatever data we want like date,year etc
  var newDate=new Date()-entering current date data
  console.log(newDate.getFullYear())

  etc methods available in mdn
*/

/*
Boolean

 Truthy/falsy

 Falsy value:false,'',0,undefined,naN,null

 false(passing variable)
var something = 2 !== 2
console.log(something)-false
var something = 2 == 2
console.log(something)-true
var something=false
console.log(something)

''
var something = 'rsgrg'
console.log(!!something)-returns true because we passing value otherwise it will be false

 0
 var something=0
console.log(!!something)-false

 undefined
 var something=undefined or var something
console.log(!!something)-false

 naN,null
var something=NaN
console.log(!!something)-false
*/

/*
conditions-if else,switch,ternary

if/else
syntax
if(condition){
  //logic
}else if(condition){
  //logic
}else{
  //logic
}


if( 2 == 2){
console.log('ruuning from if')-return this if  true
} else {
  console.log('running from else')-return this is false
}

another
var num=5
var num2=-3
if( num2>num){
console.log('num2 is greater than num')-return this if 10
}
else if (num2<0){
  console.log('num2 is a negative number')-return this if -1,-2 etc
}
else if (num2==num1){
  console.log('num2 is equal number')
}
 else {
  console.log('num2 is  smaller than num)-return this if 1
}

switch

 syntax
switch(expression){
  case case1;
  //logic
    break;
  case Case2 ;
  //logic
  break;
  default:
    //logic

    var num=2
switch (num) {
case 1:
console.log=('number is 1')-return this if 1
break;
case 2:
console.log('num is 2') return this if 2
break;
  default:
    console.log('number is not 1 or 2')-return this if 3,4 etc
}

ternary

syntax
condition?true logic: false logic

var num=1
var num2=5
num2>10  ? console.log('yes') : console.log('no')
*/

/*

scopes-visiblity and accessibility of variables
1.global scope-writes in here(page) without any wrapper
2.functional scope-writes inside function
3.block scope-writes inside curly spaces(bockcode)


var firstname='anitha'-global scope
{
  var firstname='ani'-block scope
}
function functionname(){
  -function scope
}

*/

/* var and const and let

var:
1.it is always global scope
2.it can be re-declared within its scope
3.it can be declared without initialization
4.javascript hoisting will initialize it as undefined on the top of the global scope
var firstname='anitha'
{
  var firstname='ani'
}
console.log(firstname)-display ani


let:
1.it is a block scope
2.it cannot be re-declared within its scope
3.it can be declared without initialization

const:(constant) 
1.it is a block scope
2.it cannot be re-declared  within its scope
3.it cannot be muted
4.it must be initialized during declaration

*/

/*
Array:-variable that holds multiple values
syntax
1. using array constructor,it was not used that much
const numbers=new Array(1,2,3,4);
console.log(numbers);
2.below method is most used method
let colors=["red","green","blue" ];
console.log(colors);

1.it is a collection of items
2.it is mutable
3.it is zero -based
4.it is iterable
5.it is dynamic type
6.it is an object

how to access
const someArray=[1,'two',true]
console.log(someArray[1])-two because it starts from 0

to add any element
const someArray=[1,'two',true]
someArray[3]=5
console.log(someArray)-1,two,true,5

//length//
const arrayone=[4,3,4,2,1]
console.log(arrayone.length)-it display 5 but in dex it will display 4 because length starts from 1 and index starts from 0

//finding position of element in an array
const arrayone=[4,3,4,2,1]
console.log(arrayone.indexOf(2))//4-it count from 0

//sort an array//
const arrayone=[4,3,2,1]
arrayone.sort()
console.log(arrayone)//1,2,3,4-it will sort in ascending order

//reversse an array//
const arrayone=[4,3,2,1]
arrayone.reverse()
console.log(arrayone)//1,2,3,4-it will reverse a value

//make an array to string//
const arrayone=[4,3,4,2,1]
arrayone.toString()
console.log(arrayone.toString())

//if an element exist inside an array//
const arrayone=[4,3,4,2,1]
console.log(arrayone.includes(4))-displays true because we are hving 4 inside array

//slice an array//
const arraynew=[2,3,4,5]
console.log(arraynew.slice(0,3))-it will show index of 0,1,2

//add any element
var abc=[1,2,3,4];
abc[4]=5;
console.log(abc);

push,pop,shift,unshift in note

//LOOPS//

1.for-it will run over this code inside the block a specific number of times until the condition is true
2.while-checks if condition is true then executes the blocked scoped code
3.do while-it will run the code in  blocked scope atleast once before checking the condition

//while loop//
  while(condition){
    logic
  }
let val =1;

while (val<5){
  console.log(val)
  val++
}


do while

  do{
    //logic
  }while(condition)

do{
  val++
  console.log(val)
}
while (val<0)
 

  for(initializing a variable;adding a CSSConditionRule;incrementing the variable){
  logic
  }

  for(let i=0;i<5;i++){
  console.log(i)
}

*/


