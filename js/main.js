(function () {
  "use strict";
  /**
 * Preloader
 */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Navbar vincula el estado activo en scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar .scrollto');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY;
      if (navbarlink.hash != '#header') position += 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);
  /**
 * Función de ayudante de fácil selección
 */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
  /**
 * Función de parallax
 */
  var $window = $(window);
  $('section[data-type="background"]').each(function () {
    var $bgobj = $(this); // asignando el objeto

    $(window).scroll(function () {
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));

      // Armar nuestra posición de fondo final
      var coords = '50% ' + yPos + 'px';

      // Mueve el fondo
      $bgobj.css({ backgroundPosition: coords });
    });
  });

  /**
   * Función para desplazarse a un elemento con desplazamiento superior
   */
  // function scrollto(el) {
  //   const selectHeader = document.querySelector('#header');
  //   let offset = 0;

  //   if (selectHeader.classList.contains('sticked')) {
  //     offset = document.querySelector('#header.sticked').offsetHeight;
  //   } else if (selectHeader.hasAttribute('data-scrollto-offset')) {
  //     offset = selectHeader.offsetHeight - parseInt(selectHeader.getAttribute('data-scrollto-offset'));
  //   }
  //   window.scrollTo({
  //     top: document.querySelector(el).offsetTop - offset,
  //     behavior: 'smooth'
  //   });
  // }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Oyente de eventos fácil de desplazar 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

   /**
   * Desplácese con desplazamiento en la carga de la página con enlaces hash en la url
   */
  //  window.addEventListener('load', () => {
  //   if (window.location.hash) {
  //     if (document.querySelector(window.location.hash)) {
  //       scrollto(window.location.hash);
  //     }
  //   }
  // });

  /**
 * Certificaciones Slider
 */
  const swiper = new Swiper('.certificaciones-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 3,
      }
    }
  });
  /**
 * Animacion en servicios
 */
  $(".service-card").click(function () {
    $(this).toggleClass("open");
    if ($(".overlay").hasClass("active")) {
      $(".overlay").removeClass("active");
    } else {
      $(".overlay").addClass("active");
      $(this).css("position", "absolute");
    }
    $(this).on("transitionend", function () {
      if ($(this).height() < 145) {
        $(this).css("position", "relative");
      }
    });
  });
  // para pantalla pequeña
  $(".service-card-small").click(function () {
    $(this).toggleClass("open");
    if ($(".overlay").hasClass("active")) {
      $(".overlay").removeClass("active");
      swiper.autoplay.start();
    } else {
      $(".overlay").addClass("active");
      swiper.autoplay.stop();
    }
  });
  // al darle click a overlay
  $(".overlay").on("click", function () {
    $(".overlay").removeClass("active");
    $(".open").toggleClass("open");
  });
  
  /**
 * Animacion en scroll
 */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

})();
