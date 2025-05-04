const menu = document.querySelector("#nav-list")

function toggleMenu(){
    if(menu.classList.contains("show")){
        menu.classList.remove("show")
    } else {
        menu.classList.add("show")
    }
}