const nav = document.querySelector(".navbar");
const navbarCollapse = document.getElementById("navbarResponsive");
let pozPoczScroll = window.pageYOffset;

window.onscroll = () => {
    let pozAktScroll = window.pageYOffset;
    
    if( navbarCollapse.className === "collapse navbar-collapse" ) {
        if(pozPoczScroll > pozAktScroll) {
            nav.style.top = "0";
        }
        else {
            nav.style.top = "-100px"
        }
        pozPoczScroll = pozAktScroll;
    }
    else if( navbarCollapse.className === "navbar-collapse collapse" ) {
        if(pozPoczScroll > pozAktScroll) {
            nav.style.top = "0";
        }
        else {
            nav.style.top = "-100px"
        }
        pozPoczScroll = pozAktScroll;
    }
}
