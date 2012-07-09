jQuery(function($){

  var prev_index = 0,
      position_dots = $('#tea-selector-nav #position em');

  window.slider = new Swipe(document.getElementById('tea-selector'), {
    callback: function(event, index, element) {
      position_dots
        .eq(prev_index).toggleClass('on').end()
        .eq(prev_index = index).toggleClass('on');
    }
  });

});