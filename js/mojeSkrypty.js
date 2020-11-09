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

const btnRozwin = document.getElementById("btnRozwin");
let tekst = btnRozwin.innerHTML;

btnRozwin.addEventListener("click", () => {
    
    if(tekst === "Pokaż więcej") {
        btnRozwin.innerHTML = "Pokaż mniej";
        
    }
    else {
        btnRozwin.innerHTML = "Pokaż więcej";
        
    }
    tekst = tekst === "Pokaż więcej" ? "Pokaż mniej" : "Pokaż więcej";
});
