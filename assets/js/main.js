const menu = document.querySelector("#nav-list")

function toggleMenu(){
    if(menu.classList.contains("show")){
        menu.classList.remove("show")
    } else {
        menu.classList.add("show")
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";
    link.crossOrigin = "anonymous";
    link.referrerPolicy = "no-referrer";
    document.head.appendChild(link);
});