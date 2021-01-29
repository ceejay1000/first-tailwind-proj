let burger = document.querySelector("#burger");
let menu = document.querySelector("#menu");

burger.addEventListener("click", function(e) {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
    } else {
        menu.classList.add('hidden')
    }
})