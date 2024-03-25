let menu = document.querySelector('#wantbuy-li');
let list = document.querySelector('.submenu_dropdown')

menu.addEventListener("mouseover", (event) => {
    list.style.display = "block"
});

menu.addEventListener("mouseleave", (event) => {
    list.style.display = "none"
});


let menu2 = document.querySelector('.submenu_dropdown2')
let submenu = document.querySelector('.submenu')


submenu.addEventListener("mouseover", (event) => {
    menu2.style.display = "block"
});

submenu.addEventListener("mouseleave", (event) => {
    menu2.style.display = "none"
});


let submenu_casas = document.querySelector('#submenu_casas')
let submenu_dropdown_casas = document.querySelector('.submenu_dropdown_casas')

submenu_casas.addEventListener("mouseover", (event) => {
    submenu_dropdown_casas.style.display = "block"
    console.log("hola")
});

submenu_casas.addEventListener("mouseleave", (event) => {
    submenu_dropdown_casas.style.display = "none"
});


let menu_rent = document.querySelector('#wantbuy-li_2');
let submenu_dropdown_rent = document.querySelector('#submenu_dropdown_rent')

menu_rent.addEventListener("mouseover", (event) => {
    submenu_dropdown_rent.style.display = "block"
});

menu_rent.addEventListener("mouseleave", (event) => {
    submenu_dropdown_rent.style.display = "none"
});
