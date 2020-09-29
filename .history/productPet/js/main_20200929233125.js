$(document).ready(function() {
  $('.slider__box').on('init', function(e, slick) {
      var $firstAnimatingElements = $('div.slider__item:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);
  });
  $('.slider__box').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('div.slider__item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
  });
  $('.slider__box').slick({
     autoplay: true,
     autoplaySpeed: 10000,
     dots: true,
     fade: true
  });
  function doAnimations(elements) {
      var animationEndEvents = 'sale-30 heading-right sale-25 heading-left';
      elements.each(function() {
          var $this = $(this);
          var $animationDelay = $this.data('delay');
          var $animationType = 'animated ' + $this.data('animation');
          $this.css({
              'animation-delay': $animationDelay,
              '-webkit-animation-delay': $animationDelay
          });
          $this.addClass($animationType).one(animationEndEvents, function() {
              $this.removeClass($animationType);
          });
      });
  }
});