$(function () {

  var steepr = window.steepr = {};

  $("#steep").on("pageshow", function (e, data) {
    console.log(e, data);
    var steep = $("#steep .content");
    steep.addClass("brewing");
    setTimeout(function () {
      steep.removeClass("brewing");
      console.log("about to transition");
      $.mobile.changePage("#home", {transition: "slide", reverse: true});
    }, 9000)
  });

  // tea type swiper
  steepr.type = new Swipe(document.getElementById("types"));
  new Swipe(document.getElementById('slider2'));
  var slider3 = new Swipe(document.getElementById('slider3'));
  
});