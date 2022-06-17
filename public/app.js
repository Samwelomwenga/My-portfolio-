const scrollUp=document.querySelector("#scrollToTop");
scrollUp.addEventListener("click", ()=>{
    window.scrollTo({
        top : 0,
        left: 0,
        behavior: "smooth",
    });
});