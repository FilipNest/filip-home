var http = require("http");

var convert = function (stylesheet) {

  return new Promise(function (pass, fail) {

    if (typeof stylesheet !== "string") {

      fail("Stylesheet be a string");
      return false;

    }

    http.get('http://www.colourlovers.com/api/palettes/random?format=json', function (response) {

      var str = "";

      response.on('data', function (chunk) {
        str += chunk;
      });

      response.on('end', function () {

        var result = JSON.parse(str);

        function getContrastYIQ(hexcolor) {

          var r = parseInt(hexcolor.substr(0, 2), 16);
          var g = parseInt(hexcolor.substr(2, 2), 16);
          var b = parseInt(hexcolor.substr(4, 2), 16);
          var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
          return (yiq >= 128) ? 'black' : 'white';
        }

        var palette = result[0];

        var comment = "";

        comment += "Colour Palette '" + palette.title + "' by '" + palette.userName + "' via the ColourLovers API";

        palette.colors.forEach(function (hexcolor, index) {

          stylesheet = stylesheet.split("CL" + index).join("#" + hexcolor);
          stylesheet = stylesheet.split("CLcont" + index).join(getContrastYIQ(hexcolor));

        });

        stylesheet = "/*" + comment + "*/" + "\n\n\n\n\n\n\n\n\n\n\n\n" + stylesheet;

        pass(stylesheet);

      });

    });

  })

};

var fs = require("fs");

iris.modules.colourlovers.registerHook("hook_request_intercept", 0, function (thisHook, data) {

  if (thisHook.context.req.query && thisHook.context.req.query.blackwhite === "true") {

    thisHook.context.res.cookie('blackwhite', "true", {
      maxAge: 900000,
      httpOnly: true
    });

  }

  if (thisHook.context.req.query && thisHook.context.req.query.blackwhite === "false") {

    thisHook.context.res.cookie('blackwhite', "false", {
      maxAge: 900000,
      httpOnly: true
    });

  }

  if (thisHook.context.req.url === "/themes/filip/colours.css") {

    var stylesheet = fs.readFileSync(iris.sitePath + "/themes/filip/static/colours.css", "utf8")

    thisHook.context.res.setHeader('content-type', 'text/css');

    if (thisHook.context.req.cookies.blackwhite && thisHook.context.req.cookies.blackwhite === "true") {

      stylesheet = "\n\n\n\n\n\n\n\n\n\n\n\n #dots {display:none;}" + stylesheet;

      thisHook.context.res.send(stylesheet);

      thisHook.pass(data);

      return false;

    }

    convert(stylesheet).then(function (output) {

      thisHook.context.res.send(output);

      thisHook.pass(data);

    });

  } else {

    thisHook.pass(data);

  }

})
