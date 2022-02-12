$(document).ready(function(){

    //Menu Hamburg
    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
      $hamburger.toggleClass("is-active");
      $('nav#navMobile').toggle('dflex')
    });    

    //Modal
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("btnModal");
    
    btn.onclick = function() {
        modal.style.display = "block";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }

    //Owl Carousel
    $('.owl-carousel').owlCarousel({
        nav: false,
        dots: false,
        items: 4,
        loop: false,             
        responsive:{
            0:{
                items:1,
                center: true,
                autoWidth: true,  
            },
            600:{
                items:3,
                
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