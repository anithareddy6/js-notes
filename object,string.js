// object syntax

// object{
//     key: value;
//     name: ani
// }
// code:
// let person={
//     name: "anitha",
//     age: 22,
//     no:97565334,
//     sibilings:{
//     sister: "aarthy",
//     brother: "abc"
//  }
// }
// console.log(person);
// {name: 'anitha', age: 22, no: 97565334}

// how to access
// 1. dot Notification
// 2. bracket Notification

// dot notation:
// console.log(person.age);22
// console.log(person.sibilings.brother or[1]);abc
// we can able to change the value but not key like below
// person.age=23;
// console.log(person.age);23 not 22

// bracket Notation 
// console.log(person['key']);
// console.log(person['name']);anitha

// to convert into JSON format
// const todoJSON =JSON.stringify(person);
// console.log(todoJSON);


// string 
//- set of Characters

// concatenation of string or templates of string
// let name = 'anitha';
// let age = 22;
// let result="my name is " +name+ "and my age is" +age+;-old method
// let result=`my name is ${name} and my age is ${age}`;-new method
// console.log(result);

// length of string
// let name = 'anitha';
// console.log(name.length);

// touppercase
// let name = 'anitha';
// console.log(name.toUpperCase());

// toLowerCase
// let name = 'anitha';
// console.log(name.toLowerCase());

// substring
// let name = 'anitha';
// console.log(name.substring(0,3));ani

// substring with toUpperCaselet 
// console.log(name.substring(0,3).toUpperCase());ANI

// spliting each letter (one word)
// let name = 'anitha';
// console.log(name.split('')); 'a','n',...
// spliting each letter (more word)
// let name = "anitha,aarthy,rt"
// console.log(name.split(',')); ['anitha', 'aarthy', 'rt']