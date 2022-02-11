$(document).ready(function() {

        var owl = $("#owl-demo");
 
        owl.owlCarousel({
            items : 4, 
            navigation : true, // Show next and prev buttons
            dots: true,
            nav : false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive:{
                0:{
                    items:1,
                },
                576:{
                    items:2,
                },
                768:{
                    items:3,
                },
                992:{
                    items:4
                }
            }
        });
       
















        // items : 1,
        // navigation : true, // Show next and prev buttons
        // dots: true,
        // loop: true,
        // autoplay: true,
        // autoplayTimeout: 3000,
        // autoplayHoverPause: true,
 

    //   nav:false,
    //   items: 1,
    //   dots: false,
    //   loop: true,
    //   margin: 30,
    //   autoplay: true,
    //   autoplayTimeout: 3000,
    //   autoplayHoverPause: true,
      

    // });

  });


