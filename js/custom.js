(function ($) {
    'use strict';

    $(document).on('ready', function () {
        // -----------------------------
        //  Screenshot Slider
        // -----------------------------
        $('.speaker-slider').slick({
            slidesToShow: 3,
            centerMode: true,
            infinite: true,
            autoplay: true,
            arrows:true,
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
         });
        // -----------------------------
        //  Count Down JS
        // -----------------------------
        $('.timer').syotimer({
            year: 2024,
            month: 2,
            day: 9,
            hour: 12,
            minute: 00
        });
        // -----------------------------
        // To Top Init
        // -----------------------------
        $('.to-top').click(function() {
          $('html, body').animate({ scrollTop: 0 }, 'slow');
          return false;
        });
        
        // -----------------------------
        // Magnific Popup
        // -----------------------------
        $('.image-popup').magnificPopup({
            type: 'image',
            removalDelay: 160, //delay removal by X to allow out-animation
            callbacks: {
                beforeOpen: function () {
                    // just a hack that adds mfp-anim class to markup
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            closeOnContentClick: true,
            midClick: true,
            fixedContentPos: false,
            fixedBgPos: true

        });
        // -----------------------------
        // Mixitup
        // -----------------------------
        var containerEl = document.querySelector('.gallery-wrapper');
        var mixer;
        if (containerEl) {
            mixer = mixitup(containerEl);
        }
    });

})(jQuery);


// Animations using gsap by Soham
gsap.from(".about",{
    
    y:50,
    opacity:0,
    duration:0.1,

    scale:0.9,
    
    scrollTrigger:{
        trigger:".about",
        scroller:"body",
        start:"top 70%",
        end:"top 55%",
        scrub:1
       
    }
});

gsap.from(".container",{
    
    y:50,
    opacity:0,
    duration:0.1,

    scale:0.9,
    
    scrollTrigger:{
        trigger:".container",
        scroller:"body",
        start:"top 70%",
        end:"top 55%",
        scrub:1
       
    }
});


gsap.from(".single_speaker , .speakers_area",{
    
    y:50,
    opacity:0,
    duration:0.1,

    scale:0.9,
    
    scrollTrigger:{
        trigger:".speakers_area",
        scroller:"body",
        start:"top 70%",
        end:"top 55%",
        scrub:1
       
    }
});

gsap.from(".cta-ticket .image-block",{
    
    y:50,
    opacity:0,
    duration:0.2,
    scale:0.8,
    
    scrollTrigger:{
        trigger:".cta-ticket",
        scroller:"body",
        start:"top 70%",
        end:"top 55%",
        scrub:1
       
    }
});


gsap.from(".speaker-item",{
    
    y:50,
    opacity:0,
    duration:0.1,

    scale:0.9,
    
    scrollTrigger:{
        trigger:".speakers",
        scroller:"body",
        start:"top 70%",
        end:"top 55%",
        scrub:1
       
    }
})
  
  
  
