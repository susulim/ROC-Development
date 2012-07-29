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
    fadeSpeed: 800,
    pause: 2500
  });
  
  $("table#multifamily_table").stupidtable();
  $("table#office_table").stupidtable();
  $("table#other_table").stupidtable();
  $("table#team_table").stupidtable();
  
});
