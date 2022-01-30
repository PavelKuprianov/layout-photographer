window.addEventListener('DOMContentLoaded', function(){

    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

      autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteration: false,
      },

    });


    //Логика работы меню "Бургер"

    document.querySelector('#burger').addEventListener('click', function () {
      document.querySelector('#menu').classList.add('is-active');
      document.querySelector('.burger').classList.add('burger__none');
    })

    document.querySelector('#burger-menu').addEventListener('click', function() {
      document.querySelector('#menu').classList.remove('is-active');
      document.querySelector('.burger').classList.remove('burger__none');
    })



    //Логика работы галлереи fancybox

    $(document).ready(function() {
      $(".gallery a").fancybox({
          infinite: true,
          loop: true,


      }); // выбор всех ссылок с классом gallery
      });
      $('[data-fancybox="gallery4"]').fancybox({
              smallBtn: true,
              loop: true,
              autoFocus: false,
              gutter: 20,
              keyboard: true,
              infobar: false,
              toolbar: false,
              animationEffect: "zoom",
              transitionEffect: "slide",
              fullScreen: {
              autoStart: false
              },
              touch: {
              vertical: true,
              momentum: true
              },
              animationDuration: 1500,
          });

          $('[data-fancybox="gallery"]').fancybox({
              smallBtn: true,
              loop: true,
              autoFocus: false,
              gutter: 20,
              keyboard: true,
              infobar: false,
              toolbar: false,
              animationEffect: "zoom",
              transitionEffect: "slide",
              fullScreen: {
              autoStart: false
              },
              touch: {
              vertical: true,
              momentum: true
              },
              animationDuration: 1500,
          });

          $('[data-fancybox="gallery3"]').fancybox({
              smallBtn: true,
              loop: true,
              autoFocus: false,
              gutter: 20,
              keyboard: true,
              infobar: false,
              toolbar: false,
              animationEffect: "zoom",
              transitionEffect: "slide",
              fullScreen: {
              autoStart: false
              },
              touch: {
              vertical: true,
              momentum: true
              },
              animationDuration: 1500,
          });

          $('[data-fancybox="gallery2"]').fancybox({
              smallBtn: true,
              loop: true,
              autoFocus: false,
              gutter: 20,
              keyboard: true,
              infobar: false,
              toolbar: false,
              animationEffect: "zoom",
              transitionEffect: "slide",
              fullScreen: {
              autoStart: false
              },
              touch: {
              vertical: true,
              momentum: true
              },
              animationDuration: 1500,
          });




})