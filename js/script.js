

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:40,
  responsiveClass:true,
  responsive:{
      0:{
        autoWidth: true,
          items:2,
          nav:false
      },

      768:{
          items:3,
          nav:false
      },
      1024:{
          items:4,
          nav:false,
          loop:false,
      }
  }
})

$('.popular-slider').owlCarousel({
  loop:true,
  margin: 40,
  responsiveClass:true,
  responsive:{
      0:{
        autoWidth: true,
          items:2,
          nav:false
      },

      768:{
          items:3,
          nav:false
      },
      1024:{
          items:4,
          nav:false,
          loop:false,
      }
  }
})