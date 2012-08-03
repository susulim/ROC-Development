$(document).ready(function() {
  $('#home_search_input').keydown(function(event) {
    if (event.which == 13) {
      var searchTarget = $(this).val()
      console.log(searchTarget);
      $.cookie("searchCookie", searchTarget);
    }
  });
});
