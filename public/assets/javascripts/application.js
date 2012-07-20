$(document).ready(function() {
  $('#home_slider').slides({
    pagination: true,
    generatePagination: false,
    paginationClass: 'home_slider_pagination',
    play: 5000,
    currentClass: 'current',
    pause: 0,
    hoverPause: false,
    generateNextPrev: false,
    slideSpeed: 1000,
    crossfade: true,
    effect: 'fade',
    fadeSpeed: 800
  });
  
  $(".team_list").stupidtable();
  
});
