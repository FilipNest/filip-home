var scrollSlow = 6;

$("body,article,html").on("mousewheel", function (event) {

  document.body.scrollLeft -= ((event.deltaY * event.deltaFactor) / scrollSlow);
  event.preventDefault();
});
