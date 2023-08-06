const li = document.querySelectorAll(".item")
console.log('Number of categories:',li.length)

li.forEach(function (arr) {
    console.log('Category:' ,arr.firstElementChild.textContent)
    console.log('Elements:',arr.lastElementChild.children.length)
})