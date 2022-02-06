$(document).ready(function(){

    //Menu Hamburg
    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
      $hamburger.toggleClass("is-active");
      $('nav#navMobile').toggle('dflex')
    });    

    //Owl Carousel
    $('.owl-carousel').owlCarousel({
        center: false,
        nav: false,
        dots: false,
        items: 4,
        loop: false,
        margin:10,
        autoWidth: true,        
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    var owl = $('.owl-carousel');
    owl.owlCarousel();
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })
});