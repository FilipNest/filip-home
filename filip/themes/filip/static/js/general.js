$(document).ready(function () {

  $('p').hyphenate('en-gb');
  $('p span').hyphenate('en-gb');
  $('p a').hyphenate('en-gb');
  $('p strong').hyphenate('en-gb');
  $('p strong a').hyphenate('en-gb');

  $("#dots").animate({
    top: "-10000px"
  }, 100000, function () {
    // Animation complete.
  });

})
