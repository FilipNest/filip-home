$("body,article,html").on("mousewheel", function (event) {

  if (window.innerWidth > 700 && window.innerHeight > 500 && !window.fullpage) {

    var scroll = event.deltaY * event.deltaFactor;

    window.scrollBy(-scroll, 0);

    event.preventDefault();

  }

});
