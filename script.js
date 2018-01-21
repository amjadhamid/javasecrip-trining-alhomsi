var menuItem = document.getElementById("menu").getElementsByTagName("li");
var headLine = document.getElementById("text");
var btn = document.getElementById("zar");
var myMenu = document.getElementById("menu");
var counter = 1;


// for (let index = 0; index < menuItem.length; index++) {
//    menuItem[index].addEventListener("click", selectItem)
// }'
myMenu.addEventListener("click", selectItem)

function selectItem(n) {
    if (n.target.nodeName == "LI") {
        headLine.innerHTML = n.target.innerHTML
        for (let index = 0; index < menuItem.length; index++) {
            menuItem[index].classList.remove("selected");

        }
        n.target.classList.add("selected");
    }
}


btn.addEventListener("click", newItem)


function newItem() {
    myMenu.innerHTML += "<li>new line  " + counter + "</li>"
    counter++;
}