// ------------------------------------------->
// #region Preloader-------------------------->

let loader = document.getElementById("divPreloader");
window.onload =()=>{
    loader.style.display="none";
    Home()
}

// #endregion Preloader----------------------->
// ------------------------------------------->

// ------------------------------------------>
// #region Nav Bar--------------------------->

let imgNavMenuAll = document.querySelectorAll('.imgNavMenuAll')
let nmHome = document.getElementById('nmHome')
let nmLab = document.getElementById('nmLab')
let nmFav = document.getElementById('nmFav')
let nmPlan = document.getElementById('nmPlan')
let nmMenu = document.getElementById('nmMenu')

let pageAll = document.querySelectorAll('pageAll')
let pageHome = document.getElementById('pageHome')
let pageLab = document.getElementById('pageLab')
let pageFav = document.getElementById('pageFav')
let pagePlan = document.getElementById('pagePlan')
let pageMenu = document.getElementById('pageMenu')



function Home() {
    pageHome.style.zIndex = '1'
    pageLab.style.zIndex = '0'
    pageFav.style.zIndex = '0'
    pagePlan.style.zIndex = '0'
    pageMenu.style.zIndex = '0'

    imgNavMenuAll.forEach(imgNavMenuAll => {
        imgNavMenuAll.classList.remove('checked')
    })
    nmHome.classList.add('checked')
}
function Lab() {
    pageHome.style.zIndex = '0'
    pageLab.style.zIndex = '1'
    pageFav.style.zIndex = '0'
    pagePlan.style.zIndex = '0'
    pageMenu.style.zIndex = '0'

    imgNavMenuAll.forEach(imgNavMenuAll => {
        imgNavMenuAll.classList.remove('checked')
    })
    nmLab.classList.add('checked')
}
function Fav() {
    pageHome.style.zIndex = '0'
    pageLab.style.zIndex = '0'
    pageFav.style.zIndex = '1'
    pagePlan.style.zIndex = '0'
    pageMenu.style.zIndex = '0'
    
    imgNavMenuAll.forEach(imgNavMenuAll => {
        imgNavMenuAll.classList.remove('checked')
    })
    nmFav.classList.add('checked')
}
function Plan() {
    pageHome.style.zIndex = '0'
    pageLab.style.zIndex = '0'
    pageFav.style.zIndex = '0'
    pagePlan.style.zIndex = '1'
    pageMenu.style.zIndex = '0'

    imgNavMenuAll.forEach(imgNavMenuAll => {
        imgNavMenuAll.classList.remove('checked')
    })
    nmPlan.classList.add('checked')
}
function Menu() {
    pageHome.style.zIndex = '0'
    pageLab.style.zIndex = '0'
    pageFav.style.zIndex = '0'
    pagePlan.style.zIndex = '0'
    pageMenu.style.zIndex = '1'

    imgNavMenuAll.forEach(imgNavMenuAll => {
        imgNavMenuAll.classList.remove('checked')
    })
    nmMenu.classList.add('checked')
}

nmHome.onclick = () => {
    Home()
}
nmLab.onclick = () => {
    Lab()
}
nmFav.onclick = () => {
    Fav()
}
nmPlan.onclick = () => {
    Plan()
}
nmMenu.onclick = () => {
    Menu()
}



// #endregion Nav Bar------------------------>
// ------------------------------------------>









































