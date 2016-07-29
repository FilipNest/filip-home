$(document).ready(function () {

  $('p').hyphenate('en-gb');
  $('p span').hyphenate('en-gb');
  $('p strong').hyphenate('en-gb');
  $('p strong a').hyphenate('en-gb');

  $("#dots").addClass("up");
  
})
