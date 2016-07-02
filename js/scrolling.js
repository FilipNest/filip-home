$("body,article,html").on("mousewheel", function (event) {

  var scroll = event.deltaY * event.deltaFactor;

  window.scrollBy(-scroll, 0);

  event.preventDefault();

});
