// function btnclick() {
//   alert("click");
// }
// let btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   console.log("click");
// });

// btn.innerHTML = "Click us";
// btn.addEventListener("mouseover", function () {
//   console.log("mouseover is clicked");
// });
// btn.addEventListener("mouseout", function () {
//   console.log("mouseout is clicked");
// });

// /******************************************
//  *         removeeventlistener              *
//  *******************************************/

// function click1() {
//   console.log("click1");
// }
// btn.addEventListener("click", click1);

// btn.removeEventListener("click", click1);

// /******************************************
//            ONLOAD EVENTS
// *******************************************/

// window.addEventListener("content loaded", function () {
//   console.log("loadeding  content");
// });
// let img = document.getElementById("image1");
// img.addEventListener("onload", function () {
//   console.log("fully loaded");
// });

// /******************************************
//            Onclick events
// *******************************************/

// function click3() {
//   alert("event dblclicked");
// }
// let div = document.getElementById("box");
// div.addEventListener("mousedown", click3);

// /******************************************
//          key down/up events
// *******************************************/

// window.addEventListener("keydown", click4);
// function click4(event) {
//   console.log(event.key);
// }

// /******************************************
//          key down/up events
// *******************************************/

// window.addEventListener("wheel", function (event) {
//   if (event.deltaY < 0) {
//     console.log("srcolling up ..");
//   } else if (event.deltaY > 0) {
//     console.log("srcolling down ..");
//   }
// });

/******************************************
                          todoapp                    
*******************************************/

// const list = document.getElementById("list");
// const form = document.getElementById("form");
// const todo = document.getElementById("todo");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log("submitted");
//   if (todo.value === " ") {
//     return;
//   }
//   const li = document.createElement("li");
//   li.innerText = todo.value;
//   list.appendChild(li);
//   todo.value = " ";

//   li.addEventListener("click", function () {
//     list.removeChild(li);
//   });
// });

/******************************************
 *                      practice problem
 ******************************************/

// var welcome = "Hello";
// console.log(welcome.split(""));

// var btn = document.getElementById("btn-login");
// btn.onclick = function () {
//   console.log("first click");
// };
// btn.onclick = function () {
//   console.log("second click");
// };
// btn.addEventListener("click", function () {
//   console.log("third click");
// });
// btn.addEventListener("click", function () {
//   console.log("fourth click");
// });

/******************************************
 *                      DOM
 ******************************************/

//#######by id######//

// let ele = document.getElementById("first");
// ele.innerHTML = " <p>hello</p>";
// console.log(ele);

// ####### by class ######//

// let ele = document.getElementsByClassName("cl");
// for (let i = 0; i < ele.length; i++) {
//   ele[i].innerHTML = " <p>hello</p>";
// }

// ####### by tagname ######//

// let div1 = document.getElementById("div1");
// let ele = document.getElementsByTagName("p");
// for (let i = 0; i < ele.length; i++) {
//   ele[i].innerHTML = " eello";
// }

// ####### byqueryselector  ######//

// let div1 = document.getElementById("div1");
// let div2 = document.querySelectorAll(".intro");

// for (let i = 0; i < div2.length; i++) {
//   div2[i].innerHTML = " heello";
// }

// ####### by traversing from child to parent  ######//

// let ele = document.getElementById("intro");
// let parent = ele.parentElement;
// ele.innerHTML = "hello";
// console.log(parent);

// let ele = document.getElementById("intro");
// let parent = ele.parentElement;
// parent.innerHTML = "hello";
// console.log(parent);

// ####### append And Create elemenet  ######//

// let ele = document.getElementById("intro");
// let p = document.createElement("p");
// let text = document.createTextNode("this is a text");

// for (let i = 0; i < 10; i++) {
//   console.log(ele.appendChild(p));
// }
// p.appendChild(text);

// let ele = document.getElementById("intro");
// let p = document.createElement("p");
// p.className = "para";    **
// p.id = "new";
// let text = document.createTextNode("this is a text");

// for (let i = 0; i < 10; i++) {
//   console.log(ele.appendChild(p));
// }
// p.appendChild(text);

// let ele = document.getElementById("intro");
// let p = document.createElement("p");

// let text = document.createTextNode("this is a text");
// p.appendChild(text);
// ele.appendChild(p);
// let h2 = document.createElement("h2");
// h2.textContent = "This is a textasa";

// document.body.appendChild(h2);
// let practice = document.getElementById("intro");
// console.log(practice.textContent);

// ####### Add li in html ######//

// let list1 = document.getElementById("list");
// let item = document.createElement("li");
// item.textContent = "This is a list";     ****
// list1.appendChild(item);

// ####### Insert before ######//

// let item = document.getElementById("list1");
// let add = document.createElement("li");
// add.textContent = "list anywhere";

// let pos = list1.firstElementChild.nextElementSibling.nextElementSibling;
// list1.insertBefore(add, pos);

// let parent = document.body;
// let ele = document.createElement("h2");
// ele.textContent = "This is a list of itam";
// let list = document.getElementById("list1");
// parent.insertBefore(ele, list);

// ######## Remove child #######//

// let parent = document.getElementById("Menu");
// let ele = parent.firstElementChild.nextElementSibling;
// parent.removeChild(ele);

// let parent = document.getElementById("Menu");
// let ele = parent.firstElementChild.nextElementSibling;
// parent.removeChild(ele);
// document.body.removeChild(parent);

// ######## clone element #######//

// let parent = document.getElementById("Menu");
// let ele = parent.cloneNode(true);
// document.body.appendChild(ele);

// ######## replce element #######//

// let parent = document.getElementById("Menu");
// let ele = document.createElement("li");
// ele.textContent = "Menu b";
// let replce = parent.firstElementChild.nextElementSibling;
// parent.replaceChild(ele, replce);

// ########Insert html based on select elemet #######//

// let ele = document.getElementById("intro");
// let html = "<h1>beghtml</h1>";
// ele.insertAdjacentHTML("beforebegin", html);

// let ele = document.getElementById("intro");
// let html = "<p>this is end</p>";
// ele.insertAdjacentHTML("afterbegin", html);

// let ele = document.getElementById("intro");
// let html = "<p>this is end</p>";
// ele.insertAdjacentHTML("beforeend", html);

// ########ATTRIBUTE #######//

// let btn = document.getElementById("btn");
// btn.setAttribute("name", "form1");

// let btn = document.getElementById("btn");
// let val = btn.getAttribute("name");
// console.log(val);

// let btn = document.getElementById("btn");
// btn.removeAttribute("name", "form1");

// ######## inline style #######//

// let btn = document.getElementById("btn");
// // btn.style.cssText = "background-color:red; color:white;";
// // btn.setAttribute("style", "background-color:yellow", "color:pink");
// // btn.style.color = "blue";
// btn.style.cssText += "background-color:red; color:white;";

//######## ##computed css for get previous #########//

// let btn = document.getElementById("btn");
// let css = getComputedStyle(btn);
// console.log(css.color);

// ######### css classes ########//

// let box = document.getElementById("box");
// box.className += " dum";

// let box = document.getElementById("box");
// for (let css of box.classList) {
//   console.log(css);
// }

// let box = document.getElementById("box");
// box.classList.add("new");

// let box = document.getElementById("box");
// box.classList.remove("new");
// box.classList.replace("color", "add");
// let result = box.classList.contains("new");
// console.log(result);

// let box = document.getElementById("box");
// let result = box.classList.toggle("new");

// ######### DOM Event ########//

// let btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   alert(" btn h click");
// });

// let btn = document.getElementById("btn");
// btn.addEventListener("mouseover", function () {
//   alert(" btn h click");
// });

// let btn = document.getElementById("btn");
// btn.addEventListener("mouseout", function () {
//   alert(" btn h click");
// });

// ######## Remove eventlistener ########//

// function click1() {
//   console.log("click1 active");
// }
// btn.addEventListener("click", click1);

// btn.removeEventListener("click", click1);

// ######## Mouse eventlistener ########//

// onclick..............

// function fun() {
//   alert("click1 active");
// }

// ondbl..............

// function fun() {
//   alert("click1 active");
// }

// onmousedown..............

// function fun() {
//   alert("click1 active");
// }

// onmouseup..............
//function fun() {
//   alert("click1 active");
// }

// ######## keyboard eventlistener ########//

// window.addEventListener("keydown", chekky);
// function chekky(event) {
//   console.log(event);
// }

// window.addEventListener("keyup", chekky);
// function chekky(event) {
//   console.log(event);
// }

// ######## scroll  eventlistener ########//

// window.addEventListener("scroll",function(){

//     console.log("srcolling..")
// });

// window.addEventListener("wheel", function (event) {
//   if (event.deltaY < 0) {
//     console.log("scroll up");
//   } else if (event.deltaY > 0) {
//     console.log("scroll down");
//   }
// });

// ######## Input event ########//

// let x = document.getElementById("myinput");
// x.addEventListener("focus", myfocus);
// x.addEventListener("blur", myblur);
// x.addEventListener("input", function () {
//   console.log(this.value);
// });

// x.addEventListener("change", function () {
//   console.log(this.value);
// });

// function myfocus() {
//   x.style.background = "yellow";
// }
// function myblur() {
//   x.style.background = "red";
// }

// ######## Event bubbling and capturing ########//
//child to parent..................

// let d = document.getElementById("mydiv");
// let b = document.getElementById("btn");

// b.addEventListener("click", activebtn);
// d.addEventListener("click", divdiactve);
// document.body.addEventListener("click", bodiactive);

// function activebtn() {
//   console.log("btndivactive");
// }

// function divdiactve() {
//   console.log(" div divactive");
// }

// function bodiactive() {
//   console.log("body divactive");
// }

//parent to child..................

// let d = document.getElementById("mydiv");
// let b = document.getElementById("btn");

// b.addEventListener("click", activebtn, true);
// d.addEventListener("click", divdiactve, true);
// document.body.addEventListener("click", bodiactive, true);

// function activebtn() {
//   console.log("btndivactive");
// }

// function divdiactve() {
//   console.log(" div divactive");
// }

// function bodiactive() {
//   console.log("body divactive");
// }

// let d = document.getElementById("mydiv");
// let b = document.getElementById("btn");

// b.addEventListener("click", activebtn);
// d.addEventListener("click", divdiactve);
// document.body.addEventListener("click", bodiactive);

// function activebtn(e) {
//   console.log("btndivactive");
//   e.stopPropagation();
// }

// function divdiactve() {
//   console.log(" div divactive");
// }

// function bodiactive() {
//   console.log("body divactive");
//}

//######## prevent default ########//

// let link = document.getElementById("anchor");
// link.addEventListener("click", function (e) {
//   console.log("anchor clicked");

//   e.preventDefault();
// });

// let form = document.getElementById("myform");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("submit");
// });

/******************************************
 *                      BOM
 ******************************************/

// console.log(window.innerHeight);
// console.log(window.innerWidth);
//console.log(window.outerWidth);

// let btn = document.getElementById("btn1");
// let url = "http://codepen.io";
// let features = "height=500,width=500";
// btn.addEventListener("click", function (e) {
//   window.open(url, "google", features);
// });
// let btn3 = document.getElementById("btn3");
// btn3.addEventListener("click", function (e) {
//   let win = window.open(url, "google", features);
//   win.close();
// });

//######## time out and time interval  ########//
//set time out............

// setTimeout(myfunction, 6000);
// function myfunction() {
//   alert("time out");
// }

// let timout = setTimeout(myfunction, 6000);
// function myfunction() {
//   alert("time out");
// }
// clearTimeout(timout);

//set  intervel............

// var time = setInterval(myfunction, 3000);
// function myfunction() {
//   alert("time out");
// }
// var timout = document.getElementById("btn1");
// timout.addEventListener("click", function () {
//   clearInterval(time);
// });

//######## location object  ########//

// console.log(location.href);
// console.log(location.pathname);
// console.log(location.protocol);

// function fun() {
//   //   window.location = "http://www.google.com";
//   //   window.href = "http://www.google.com";
//   //   location.assign("http://www.google.com");
//   //   location.replace("http://www.google.com");
// //   location.reload();
// }

//######## lnavigation object  ########//

// console.log(navigator.cookieEnabled);
// console.log(navigator.userAgent);

//######## screen object  ########//
// console.log(screen.width);
// console.log(screen.colorDepth);
// console.log(screen.orientation);

/******************************************
 *                      Mini Project -1    
                    tempreture convetre 
 ******************************************/
// var cel = document.getElementById("cel");
// var farh = document.getElementById("farh");
// cel.addEventListener("input", function () {
//   let c = this.value;
//   let f = (c * 9) / 5 + 32;
//   farh.value = f;
//   if (!Number.isInteger(f)) {
//     f = f.toFixed(4);
//   }
//   farh.value = f;
// });
// farh.addEventListener("input", function () {
//   let f = this.value;
//   let c = ((f - 32) * 5) / 9;
//   cel.value = c;
//   if (!Number.isInteger(c)) {
//     c = c.toFixed(4);
//   }
//   cel.value = c;
// });

/******************************************
 *                      Mini Project -2
 *              word and charector counter
 ******************************************/

// let textbox = document.getElementById("textbox");
// textbox.addEventListener("input", function () {
//   var text = this.value;
//   let char = text.length;
//   document.getElementById("char").innerHTML = char;
//   text = text.trim();

//   let word = text.split(" ");
//   let cleanList = word.filter(function (ele) {
//     return ele != "";
//   });
//   document.getElementById("word").innerHTML = cleanList.length;
// });

// .............................................

// function name1() {
//   var dataname = document.getElementById("nameperson");
//   var name2 = prompt("Enter your name");
//   document.getElementsByTagName("h1")[0].innerHTML =
//     name2 + "<br>" + "do u want to know ur age";
// }

// name1();
// function calculator() {
//   var number = document.getElementById("number").value;
//   if (number == " " || number == 0) {
//     alert("Please enter a valid number");
//   }
//   var date = new date().getfullYear();
//   var birthyear = date - number;
// document.getElementById("year").innerHTML ="year born " + birthyear;
// document.getElementById("year").style.color="black";
// }
// document.getElementById(""button").onclick = function(){
//     dataname.innerText = `${name2}`
//     dataname.style.color="red";
//     datanames.style.fontSize="30px";
//     datanames.style.textAlign="center";

// };
// calculator();
// };

// }

//..............................

//.....................

// const message1 = document.querySelector("message1");
// const message2 = document.querySelector("message2");
// const buttons = document.querySelectorAll("button");
// const coinArray = ["heads", "tails"];
// let score = [0, 0];
// for (i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", tossCoin);
// }
// function tossCoin(e) {
//   ss;
//   let playerGuess = e.target.innerText;
//   let computerToss = Math.floor(Math.random() * 2);
//   let output;
//   if (playerGuess === computerToss) {
//     output = "player wins";
//     score[0]++;
//   } else {
//     output = "computer Wins";
//     score[1]++;
//   }
// }
// message1.innerHTML = output;
// +"<br>  player" + score[0] + "computer" + score[1];
// message2.innerHTML = `computer selector  -->${computerGuess} <br> player selected ${playerGuess}`;

//.....................//.....................

//Write a program to search if a number exists in an array. If the number exists then return the position. If it exists multiple time then return an array with all the positions. If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1/

// const arr = [1, 2, 3, 4, 5, 1, 3];
// const searchElem1 = 4;
// const searchElem2 = 1;
// const searchElem3 = 7;

// function findPositions(arr, searchElem) {
//   let positions = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === searchElem) {
//       positions.push(i);
//     }
//   }
//   if (positions.length > 0) {
//     return positions.length > 1 ? positions : positions[0];
//   } else {
//     return -1;
//   }
// }
// console.log(findPositions(arr, searchElem1));
// console.log(findPositions(arr, searchElem2));
// console.log(findPositions(arr, searchElem3));

// function name1() {
//   var datanames = document.getElementById("nameperson");
//   var name2 = prompt("Enter your name");
//   document.getElementsByTagName("h1")[0].innerHTML =
//     name2 + "<br>" + "do u want to know ur age";
// }

// name1();
// function calculator() {
//   var number = document.getElementById("number").value;
//   if (number == " " || number == 0) {
//     alert("Please enter a valid number");
//   }
//   var date = new date().getfullYear();
//   var birthyear = date - number;
//   document.getElementById("year").innerHTML = "year born " + birthyear;
//   document.getElementById("year").style.color = "black";
// }
// document.getElementById("button").onclick = function () {
//   datanames.innerText = `${name2}`;
//   datanames.style.color = "red";
//   datanames.style.fontSize = "30px";
//   datanames.style.textAlign = "center";

//   calculator();
// };

//#########favrite movie #########//

// ******************************************//
//                         ADVANCED
//                             JAVASCRIP(ES6)
//  ******************************************//

//########### Rest parameter  ############//

// function sum(...args) {
//   let result = 0;
//   for (let i = 0; i < args.length; i++) {
//     result += args[i];
//   }
//   console.log(result);
// }
// sum(7, 9, 9, 9);

//########### Spread parameter  ############//

// let arr1 = [1, 2, 3, 4, 5, 6, 7];
// let arr2 = [8, 9, ...arr1];
// console.log(arr2);

// let arr1 = [1, 2, 3, 4, 5, 6, 7];
// let arr2 = [...arr1, 8, 9];
// console.log(arr2);

// let arr1 = [1, 2, 3, 4, 5, 6, 7];
// let arr2 = [8, 9];
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

//########### ES6- for...of  ############//

// let score = [1, 2, 3, 4, 5];
// for (let x of score) {
//   console.log(x);
// }

// let score = "hello world";
// for (let x of score) {
//   console.log(x);
// }

//########### ES6- Template literal  ############//

// let str = `john wick`;
// console.log(`my name is : ${str}`);
// let num = `60`;
// console.log(`the num is : ${num * 3}`);

//########### ES6- Array - Destructuring###########//

//let book = [1, 2, 3];
// let name = book[0];
// let price = book[1];
// let page = book[2];

//let [name, price, page] = book;
//console.log(price, page);

// let book = ["advaced", "", 200, 399];
// let [name, price, page, publication] = book;
// console.log(name, page, publication);

// let book = ["advaced", "", 200, 399];
// let [name, price, page, publication] = book;
// console.log(name, (price = 500), page, publication);

// function book1() {
//   //somethinhg
//   return ["advaced", 200, 699];
// }
// let name = book1();
// console.log(name);

// function book1() {
//   return ["advaced", 200, 699];
// }
// let [booktitle, price, page] = book1();
// console.log(price, page);

// function book1() {
//   return ["advacedbook", "reactboook"];
// }
// var book1,
//   book2 = book1();
// console.log(book1, book2);

//########## ES6- Object - Destructuring###########//

// let book = {
//   name1: "advaced",
//   page: 200,
//   price: 299,
// };
// let name = book.page;
// console.log(name);

// let book = {
//   name1: "advaced",
//   page: 200,
//   price: 299,
// };
// let { name1: title, price, page } = book;
// console.log(title);

// let book = {
//   name1: "advaced",
//   page: 200,
//   price: 299,
//   publication: {
//     pub_name1: "tsch",
//     year: 2000,
//   },
// };
// let {
//   name1: title,
//   price,
//   page,
//   publication: { pub_name1, year },
// } = book;

// console.log(book.publication.year);

//########## ES6- MODULE###########//

// import { name } from "./modules/user.js";

// import { code } from "./modules/user.js";
// import { age } from "./modules/user.js";
// console.log(name, age);
// code();

// // import { widraw, deposit } from "./modules/account.js";

// import { widraw as wd, deposit } from "./modules/account.js";//rename
// wd();
// deposit();

// import * as shu from "./modules/user.js";

// shu.code();

// import { default as shu } from "./modules/user.js"; //default function
// shu();

// import { code } from "./modules/user.js";
// code();

//####### ES6- Aggregating module######//

// import { circle, trangle, square } from "./modules/shape.js";
// circle();
// trangle();
// square();

//####### ES6- Object oriented proggraming######//

//object();
//class();
//inheritence();

//3 way to create object

// let person = {
//   firstName: "John",
//   lastName: "wick",
//   age: 28,
//   fullName: function () {
//     console.log(this.firstName + this.lastName);
//   },
// };
// console.log(person.firstName);
// console.log(person.fullName());

// let person = {};
// person.name = "John";
// person.lastname = "wick";
// person.fullname = function () {
//   console.log(this.name + this.lastname);
// };
// person.fullname();

// let person1 = new Object();
// person1.name = "John";

// person1.fullName = function () {
//   alert("hi");
// };
// console.log(person1.name);
// person1.fullName();

//####### ES6- Oop constructor fun'c######//

// function Person(first, last) {
//   this.firstName = first;
//   this.lastName = last;

//   this.fullName = function () {
//     alert("hi");
//   };

//   this.changelast = function (newName) {
//     this.last = newName;
//   };
// }

// let person1 = new Person("shu", "bho");
// let person2 = new Person("ram", "shyam");
// person1.changelast("bhola");
// console.log(person1);
// console.log(person2);

//######### ES6- prototype ##########//

// let person1 = {};
// console.log(person1);
// let person2 = {
//   name1: "ram",
// };
// function Person(n) {
//   this.name2 = n;
// }
// let person3 = new Person("shysm");
// console.log(person3);
// console.log(person2.hasOwnProperty("name1"));

//To connect two proytotype..........................

// function Creature(ls) {
//   this.lifespan = ls;
// }
// Creature.prototype.breath = function () {
//   console.log("breathing..");
// };
// let Creature1 = new Creature(100);
// console.log(Creature1);
// //.......................................

// function Person(first, last, a) {
//   this.firstname = first;
//   this.lastname = last;
//   this.age = a;
//   this.fullName = function () {
//     console.log(this.firstname + " " + this.lastname);
//   };
// }

// Person.prototype.fullname = function () {
//   console.log(this.firstname + " " + this.lastname);
// };

// Person.prototype.__proto__ = Object.create(Creature.prototype);
// Person.prototype.age = 25;
// let person1 = new Person("shubham", "bhonde", 24);
// let person2 = new Person("shu", "bhonde", 25);
// console.log(person1.breath());
// console.log(person2);

//######### ES6- class & object ##########//

// class Person {
//   constructor(n, a) {
//     this.name = n;
//     this.age = a;
//   }
//   sayHi() {
//     console.log("hi......"); //method
//   }
//   static hello() {
//     console.log("hello......"); //method
//   }
//   static sproperty = "something";
// }
// let person1 = new Person("shub", 25);

// person1.sayHi();
// Person.hello(); //cll by class name
// console.log(Person.sproperty);
// console.log(person1);

//######## ES6- class & object &inheritnce #######//

// class emp {
//   constructor(n) {
//     this.name = n;
//   }
//   msg() {
//     console.log("hello..");
//   }
// }
// class manager extends emp {
//   constructor(n, d) {
//     super(n);
//     this.department = d;
//   }

//   msg() {
//     console.log("hiii..");
//   }
//   info() {
//     super.msg(); //cll parent

//     this.msg(); //cll its own

//     console.log(this.name + " " + "is the  mananger of  " + this.department);
//   }
// }
// class admin extends manager {

// }
// let mng1 = new manager("shubh", "web devlopment");
// console.log(mng1.info());
// let admin1 = new admin(" shubhra ", "app devlopment");
// console.log(admin1);

//######## ES6- public/private class #######//

// class emp {
//   constructor(n) {
//     this.name = n;
//   }
//   getName() {
//     console.log(this.name);
//   }
// }
// let emp1 = new emp("shubhara");
// //public can cll by object diecetly but private cnat
// console.log(emp1);

// class emp {
//   #name = "";             //private
//   constructor(n) {
//     this.#name = n;
//   }
//   getName() {
//     console.log(this.#name);
//   }
// }
// let emp1 = new emp("shubhara");
// console.log(emp1.getName());

// class emp {
//   #name = ""; //private
//   constructor(n) {
//     this.#name = n;
//   }
//   #getName() {    // private
//     console.log(this.#name);
//   }
//   pubfun() {
//     this.#getName(); // can't cll direct privte
//   }
// }
//  let emp1 = new emp("shubhara");
// console.log(emp1.pubfun());

//########ES6- public/private class mixing #######//

// let userName = {
//   shu() {
//     console.log("s");
//   },
// };

// let usefullMethod = {
//   sayHi() {
//     console.log("hiii..");
//   },

//   sayBye() {
//     console.log("bye.");
//   },
// };
// class user {
//   constructor() {
//     this.name = "shubham ";
//   }
// }
// class admin extends user {}
// let admin1 = new admin();
// console.log(admin1);
// Object.assign(admin.prototype, usefullMethod, userName);
// //we can parent class and also other methods and proprty of object  get  in mixing
// let user1 = new user();
// console.log(user1);

//########## ES6- Arrow function #########//

// function sum (a,b){   //norml
//   return a + b;
// }

// let sum = (a, b) => {   // arrow function
//   return a + b;
// };
// console.log(sum(2, 3));

// let sum = (a, b) => a + b; // signle line
// console.log(sum(2, 3));

// let double = (a) => 2 * a;
// console.log(double(2));

// function random() {
//   return Math.random();
// }
// console.log(random());

// let random = () => Math.random();
// console.log(random());

//########## ES6- Anonomus function #########//

// document.addEventListener("click", function () {
//   console.log("clicked...");
// });    //anonomus function

// document.addEventListener("click", () => console.log("clicked..."));//anonomus function in arrow

//########## ES6- call back function #########//

// function sayHello() {
//   console.log("Hello!");
// }
// function sayHi() {
//   console.log("Hi!");
// }
// function add(num1, num2, callback) {
//   console.log(num1 + num2);
//   callback();                          //callback
// }
// add(10, 20, sayHello);
// add(12, 10, sayHi);
// add(12, 10, function () {    //anonomus
//   console.log("Hello world!");
// });

//########## ES6- map function #########//

// let arr1 = [2, 3, 4, 5, 6];      //normal way
// let arr2 = [];
// for (let i = 0; i < arr1.length; i++) {
//   arr2[i] = arr1[i] * 2;
// }
// console.log(arr2);

// let arr1 = [2, 3, 4, 5, 6];
// let arr2 = arr1.map(function (v) { // map function by anonomus
//   return v * 3;
// });
// console.log(arr2);

// let arr1 = [2, 3, 4, 5, 6];
// let arr2 = arr1.map((v) => v * 3);//map by arrow
// console.log(arr2);

// let arr1 = [2, 3, 4, 5, 6];
// let arr2 = arr1.map((v) => v + 3);
// console.log(arr2);

//########## ES6- filter function #########//

// let arr1 = [2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = arr1.filter((val) => val > 2);
// console.log(arr2);

// let arr1 = [2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = arr1.filter((val) => val < 3);
// console.log(arr2);

// let team = [
//   {
//     name: "shubham",
//     position: "web devloper",
//   },
//   {
//     name: "shubhra",
//     position: "devloper",
//   },
//   {
//     name: "shubh",
//     position: "devloper",
//   },
//   {
//     name: "shu",
//     position: "back end devloper",
//   },
// ];
// let devloper = team.filter((val) => val.position == "devloper");
// console.log(devloper);

//###########  ES6- cookies ##########//

// document.cookie = "item = milk;  expires = sat ,20 march 2022  12:00:00 UTC";

// document.cookies =
//   "item = bread ,eggs;  expires = sat ,20 march 2022;l̥o  12:00:00 UTC";
// let x = document.cookie;
// alert(x);

// document.cookies =
//    "item = bread ,eggs;  expires = tue ,20 march 2022;  12:00:00 UTC"; // expires delet give past dat

//###########  ES6- local & session ##########//

// localStorage.setItem("firstName", "John");
// localStorage.setItem("lastName", "wick");
// //console.log(localStorage.getItem("lastName"));
// localStorage.removeItem("lastName");

// sessionStorage.setItem("firstName", "John");
// sessionStorage.setItem("lastName", "wick");
// //console.log(sessionStorage.getItem("lastName"));
// sessionStorage.removeItem("lastName");

//******************************************//
//                             JSON
//                             JAVASCRIP(ES6)
//  ******************************************//

// javascript  object notation.....

// let data = `{
//     "name": "shub",
//     "age": 25,
//     "is_student": true,
//     "passport_num": "null",
//     "p_lang": ["c", "c++","java"],

//     "address": {
//       "city": "delhi",
//       "state": "maharastra",
//       "pincode": 4444444
//     }
//   }`;

// let dObject = JSON.parse(data);
// console.log(dObject["name"]);
// console.log(dObject["age"]);
// console.log(dObject["p_lang"][2]);
// console.log(dObject["address"]["pincode"]);

//JSON stringify.........................

// let student = {
//   name1: "shu",
//   age: 24,
//   city: "delhi",
// };
// let jdata = JSON.stringify(student);
// console.log(jdata);

//###########  ES6- AJAX ##########//

// Ajax stand for asynchronous javascript and
//xml  stand eXtensible markup language
// to store and transport data
// update a web without reloading the page
// send data to a web server in the background

let data = `{
        "name": "shub",
        "age": 25,
        "is_student": true,
        "passport_num": "null",
        "p_lang": ["c", "c++","java"],
    
        "address": {
          "city": "delhi",
          "state": "maharastra",
          "pincode": 4444444
        }
      }`;
function load() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const obj = JSON.parse(this.responseText);
    document.getElementById("demo").innerHTML =
      obj.data.name + "  " + obj.data.age;
    console.log(this.responseText);
  };
  xhttp.open("GET", "student.json");
  xhttp.send();
}
