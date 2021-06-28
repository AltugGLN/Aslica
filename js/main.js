new Glider(document.querySelector(".glider"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: "#resp-dots",
    arrows: {
        prev: ".glider-prev",
        next: ".glider-next",
    },
    
    responsive: [
        {
          // screens greater than >= 600px
          breakpoint: 600,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 2,
            // itemWidth: 170,
            duration: 0.25,
          }
        },{
            // screens greater than >= 900px
            breakpoint: 900,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 3,
              slidesToScroll: 3,
            //   itemWidth: 170,
              duration: 0.25,
            }
          },{
          // screens greater than >= 1200px
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            // itemWidth: 170,
            duration: 0.25,
          }
        }
    ]
});

