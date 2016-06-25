$("body,article,html").on("mousewheel", function (event) {

  document.body.scrollLeft -= ((event.deltaY * event.deltaFactor));
  event.preventDefault();
});
