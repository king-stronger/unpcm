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

const faqButtons = document.querySelectorAll(".faq-plus");

faqButtons.forEach(faqButton => {
    const faqItem = faqButton.closest(".faq-item");

    faqButton.addEventListener("click", (event) => {
        event.preventDefault();
        faqItem.classList.toggle("show");
        faqItem.classList.toggle("is-active");


        if (faqButton.classList.contains("bx-plus")) {
            faqButton.classList.replace("bx-plus", "bx-minus");
        } else {
            faqButton.classList.replace("bx-minus", "bx-plus");
        }

    });
});
