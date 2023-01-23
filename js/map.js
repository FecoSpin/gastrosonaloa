(function () {
    "use strict";
    const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      /**
 * mapa
 */
  var map = L.map('map').setView([24.800523, -107.4150187], 15);


  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
  }).addTo(map);


  var marker1 = L.marker([24.806568284741104, -107.39882610983265]).addTo(map);
  var marker2 = L.marker([24.7954553404801, -107.43697473675033]).addTo(map);

  marker1.bindPopup("<b>UDH</b><br><a href='https://www.google.com/maps/search/?api=1&query=" + marker1.getLatLng().lat + "," + marker1.getLatLng().lng + "' target='_blank'>ir al lugar</a>").openPopup();
  marker2.bindPopup("<b>Hospital Ángeles</b><br><a href='https://www.google.com.mx/maps/place/Hospital+Angeles+Culiac%C3%A1n/@24.7959375,-107.4370553,17z/data=!3m1!4b1!4m5!3m4!1s0x86bcd0637676b22f:0xd3b7d1ee45e1a837!8m2!3d24.7959375!4d-107.4370553' target='_blank'>ir al lugar</a>").openPopup();
  if (isMobile()) {
    map.setZoom(14);
  } else {
    map.setZoom(15);
  }
  /**
 * Animacion en scroll
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
      if ($(this).height() < 300) {
        $(this).css("position", "relative");
      } else if ($(this).height() < 300) {
      }
    });
  });
})();