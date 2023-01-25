$(window).load(function () {

    /* MOBIL MENU */
    $('#mmenu').mmenu({
        iconbar : {
            use: true,
            top:[
                "<a href='#/'><img src='img/tr.png' alt='Türkçe'></a>",
                "<a href='#/'><img src='img/en.png' alt='English'></a>",
                // "<a href='#/'><img src='img/fr.png' alt='French'></a>",
                // "<a href='#/'><img src='img/ru.png' alt='Russia'></a>",
            ],bottom:[
                "<a href='/'><i class='icon-facebook'></i></a>",
                "<a href='/'><i class='icon-instagram'></i></a>",
                "<a href='/'><i class='icon-linkedin'></i></a>",
                "<a href='/'><i class='icon-youtube'></i></a>",
            ]
        },
        navbar: {
            title: 'MENU'
        },
        searchfield: {
            add: false
        },
        extensions: ["position-right", "position-front"],
        navbars: [{
            position: 'top',            
            content: [
                'prev',
                'title',
                'close'
            ]
            
        }]
    });

 


});

$(document).ready(function() {

var coll = document.getElementsByClassName("dropdown");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


	$(".imglq").imgLiquid();
    $('.slider').slick({
        infinite: true,
        dots: true,
        prevArrow:"<i class='slide-prev icon-right-arrow'></i>",
        nextArrow:"<i class='slide-next icon-right-arrow'></i>"
      });

      $('.product-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        autoplay:true,
        asNavFor: '.product-slider-nav',
        prevArrow:"<i class='slide-prev icon-right-arrow'></i>",
        nextArrow:"<i class='slide-next icon-right-arrow'></i>"
      });

      $('.product-slider-nav').slick({
        infinite: true,
        autoplay:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product-slider',
        dots: false,
        
      });





      $('.showcase-slider').slick({
        infinite: true,
        dots: false,
        arrows: false,
        fade: true,
      });
      $('.showcase-slide-nav').slick({
        infinite: true,
        dots: false,
        slidesToShow: 1,
        prevArrow:"<i class='slide-prev icon-right-arrow'></i>",
        nextArrow:"<i class='slide-next icon-right-arrow'></i>",
        asNavFor: '.showcase-slider',
        fade: true,
      });

      $('.carousel').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1500,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
  
});

$('.faq-question').click(function(e) {
  e.preventDefault();
  var notthis = $('.active').not(this);
  notthis.find('.icon-bottom-arrow').addClass('icon-right-arrow').removeClass('icon-bottom-arrow');
  notthis.toggleClass('active').next('.faqanswer').slideToggle(300);
   $(this).toggleClass('active').next().slideToggle("fast");
  $(this).children('i').toggleClass('icon-right-arrow icon-bottom-arrow');
  });
