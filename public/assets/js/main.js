const scrollers = document.querySelectorAll(".scroller");

if(!window.matchMedia("(prefers-reduce-motion: reduce)").matches){
    addAnimation();
}

function addAnimation(){
    scrollers.forEach(scroller => {
        scroller.setAttribute("data-animated", "true");

        const scrollerInner = scroller.querySelector(".scroller-inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", "true");
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}

const toggles = document.querySelectorAll(".faq-plus");

toggles.forEach(icon => {
    icon.addEventListener("click", () => {
        const faqItem = icon.closest(".faq-item");

        faqItem.classList.toggle("show");

        if (icon.classList.contains("bx-plus")) {
            icon.classList.remove("bx-plus");
            icon.classList.add("bx-minus");
        } else {
            icon.classList.remove("bx-minus");
            icon.classList.add("bx-plus");
        }
    });
});
