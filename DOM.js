// console.dir(document);
// console.log(document.head)
// console.log(document.body.children);
// const header1 = document.querySelector("#main-header")
// console.log(header1);
// // header1.textContent= "DOM-MANUPULATION"



// // Make the title have a black border as the youtuber does

// const title = document.querySelector(".title")
// console.log(title);
// // title.style.border = "solid 3px "
// title.style.color = "green"
// title.style.border = "solid 3px "

// const mainTitle = document.querySelector("#header-title")
// console.log(mainTitle.textContent);
// mainTitle.style.border = "solid 2px #000"

// const items = document.querySelectorAll(".list-group-item")
// console.log(items);

// console.log(items[2]);
// console.log(items[0]);
// items[1].textContent = "Hello 2"
// items[1].style.fontWeight = "bold"
// items[2].style.backgroundColor = "green"

// const lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.fontWeight='bold'


// for(let i = 0; i<items.length;i++){
//     items[i].style.fontWeight = "bold"
//     items[i].style.color = "blue"
// }

//have to change it let to modify array 
// let items = document.querySelectorAll(".list-group-item")
// items=Array.from(items)
// items.forEach((item)=>{
//       item.style.fontWeight = "bold"
// })



// aah finally it worked - remebet to add varible name in parameter and use that name as object to make the changes


// Make the 2nd item have green background color
// Make the 3rd item invisible

// const items = document.querySelectorAll(".list-group-item")
// items[1].style.backgroundColor = "green"
// items[2].style.display = "none"

// Using QuerySelectorALL change the font color to green for 2nd item in the item list
// Choose all the odd elements and make their background green using QuerySelectorALL﻿

// const items = document.getElementsByClassName("list-group-item")
// items[1].style.color = "blue"

// let oddItems = document.querySelector("li:nth-child(odd)");
// oddItems.forEach((item)=>{
//       item.style.backgroundColor = "green"
// })
// console.log(oddItems);


// parentElement
// lastelementchild
// lastchild
// createchild
// firstelementchild
// firstchild
// nextsibling
// nextelementsibling
// previoussibling
// previouselementsibling
// createelement
// setAttribute
// createtesxtnode
// appendchild

// const items = document.querySelector("#items")
// console.log(items);

// // parent element of ul
// console.log(items.parentElement);

// //last child of ul
// console.log(items.lastElementChild);

// // sibling of ul
// console.log(items.nextSibling);
// // next siblind node of element aside from textnodes
// console.log(items.nextElementSibling); //no next sibling of ul
// console.log(items.previousElementSibling);
// // output is h2 as expected

// // create element
// let newLiItem = document.createElement("li")

// //given a class to that element
// newLiItem.className = "newLiItem"

// //given a id to that element
// newLiItem.id='newLiItem'

// //given a textcontent to that element
// newLiItem.textContent="freshly made"
// //styling added
// newLiItem.style.color="green"

// // added to dom
// items.append(newLiItem)
// //console.log(document);

// creating new text node
let newTextNode = document.createTextNode("I'm the new textnode")

//creative whole new div

let newDiv = document.createElement("div")
newDiv.className="hello"
newDiv.id="hello1"
newDiv.setAttribute("title" , "HEllo div")
newDiv.appendChild(newTextNode)

console.log(newDiv);

var contain = document.querySelector("header .container")
var h1 = document.querySelector('header  h1')
contain.insertBefore(newDiv , h1)
