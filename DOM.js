// console.dir(document);
// console.log(document.head)
// console.log(document.body.children);
const header1 = document.querySelector("#main-header")
console.log(header1);
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

const items = document.querySelectorAll(".list-group-item")
// console.log(items);

// console.log(items[2]);
// console.log(items[0]);
// items[1].textContent = "Hello 2"
// items[1].style.fontWeight = "bold"
items[2].style.backgroundColor = "green"
// const lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.fontWeight='bold'


// items.forEach(()=>{
//       items.style.fontWeight = "bold"
// })
for(let i = 0; i<items.length;i++){
    items[i].style.fontWeight = "bold"
    items[i].style.color = "blue"
}
