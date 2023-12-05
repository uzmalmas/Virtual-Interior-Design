/* Created by Furbish */

$(document).ready(function () {
    $(".fa-bars").click(function () {
      $(this).toggleClass("fa-times");
      $("nav").toggleClass("nav-toggle");
    });
  
    $(window).on("scroll load", function () {
      $(".fa-bars").removeClass("fa-times");
      $("nav").removeClass("nav-toggle");
    });
  
    $(".design").magnificPopup({
      delegate: "a",
      type: "image",
      gallery: {
        enabled: true,
      },
    });
    
  });