$('.slider__box').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,

  });
const scroll = document.querySelector('.menu')
const headerTop = document.querySelector('.header-top')
let sticky = scroll.offsetTop;
let heightMenu = scroll.offsetHeight;

function fixedMenu() {
  console.log(sticky)
  if(window.pageXOffset >= sticky) {
    scroll.classList.remove('fexed-scroll')
    document.querySelector('.slider').style.marginTop = 0 + 'px'
 
  }else {
    scroll.classList.add('fexed-scroll')
    headerTop.style.display = 'none'
    document.querySelector('.slider').style.marginTop = heightMenu + 'px'
  }
}
fixedMenu()