const menuBtn = document.querySelector('.header__nav-btn');
const menu = document.querySelector('.header__nav ul');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
} );


const anchors = document.querySelectorAll(".header__nav a");

anchors.forEach(anc =>{
  anc.addEventListener("click", function(event) {
    event.preventDefault();

    const id = anc.getAttribute("href");
    
    const elem = document.querySelector(id);

    window.scroll({
      top: elem.offsetTop - 80,
      behavior: "smooth"
    });
  });
})