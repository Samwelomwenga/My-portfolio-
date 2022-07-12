// start  of hamberger menu code

const primarynav=document.querySelector("#primary-navigation");
const navtoggle=document.querySelector(".mobile-nav-toggle");

navtoggle.addEventListener("click", ()=>{
    const visibility= primarynav.getAttribute("data-visible")
    if(visibility==="false"){
        primarynav.setAttribute("data-visible",true);
        navtoggle.setAttribute("aria-expanded",true);
    }else(visibility==="true") {
        primarynav.setAttribute("data-visible",false);
        navtoggle.setAttribute("aria-expanded",false);

    } 
});

// End of hamberger menu code



const scrollUp=document.querySelector("#scrollToTop");
scrollUp.addEventListener("click", ()=>{
    window.scrollTo({
        top : 0,
        left: 0,
        behavior: "smooth",
    });
});