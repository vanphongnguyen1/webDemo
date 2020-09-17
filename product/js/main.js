let scroll = document.getElementById("navigation");
let sticky = scroll.offsetTop;
let heightMenu = scroll.offsetHeight

function fixedMenu() {
    // console.log(sticky)
    // console.log(heightMenu)
    if (window.pageYOffset >= sticky) {
        // console.log(window.pageYOffset)
        scroll.classList.add("navigation--fixed")
        document.querySelector('.banner').style.marginTop = heightMenu + 'px'
    } else {
        scroll.classList.remove("navigation--fixed");
        document.querySelector('.banner').style.marginTop = 0
    }
}
$('.banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  });