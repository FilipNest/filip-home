var CL = {};

CL.load = function (styleIDs) {

  CL.styleIDs = styleIDs;

  var script = document.createElement('script');
  script.src = 'http://www.colourlovers.com/api/palettes/random?jsonCallback=CL.CLpalette';
  document.getElementsByTagName('head')[0].appendChild(script);

}

CL.CLpalette = function (response) {

  // Function for getting dark or light colour

  function getContrastYIQ(hexcolor) {
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
  }

  var palette = response[0];

  $.each(palette.colors, function (index, element) {

    // Is this a dark or light colour?

    var contrast = getContrastYIQ(element);

    CL.styleIDs.forEach(function (styleID) {

      //    CL-color

      document.getElementById(styleID).innerHTML = document.getElementById(styleID).innerHTML.split("CL" + index).join("#" + element);

      document.getElementById(styleID).innerHTML = document.getElementById(styleID).innerHTML.split("CLcont" + index).join(contrast);

    })

  });


}

CL.load(["colours", "header-colours"]);
