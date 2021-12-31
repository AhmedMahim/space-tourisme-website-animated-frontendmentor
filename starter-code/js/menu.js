
const menuIcon = document.getElementById('menuIcon'),
closeIcon = document.getElementById('close'),
mobileNav = document.getElementById('mobileNav');

menuIcon.onclick = () =>{
    mobileNav.classList.add('active');    
}
closeIcon.onclick = () =>{
    mobileNav.classList.remove('active');    
}