$('.slider__box').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
    draggable: false,
		arrows: false,
		responsive: [
	    {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
		          }
        },
      {
        breakpoint: 768,
        settings: {
          draggable: true,
        }
		  },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          draggable: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          draggable: true,
          slidesToScroll: 1
        }
      }
		]
 });

// const scroll = document.querySelector('.menu')
// const headerTop = document.querySelector('.header-top')
// let sticky = scroll.offsetTop;
// let heightMenu = scroll.offsetHeight;

// function fixedMenu() {
//   console.log(sticky)
//   if(window.pageXOffset >= 90) {
//     scroll.classList.add('fexed-scroll')
//     headerTop.style.display = 'none'
//     document.querySelector('.slider').style.marginTop = heightMenu + 'px'
//   }else {
//     scroll.classList.remove('fexed-scroll')
//     document.querySelector('.slider').style.marginTop = 0 + 'px'
//   }
// }
// fixedMenu()