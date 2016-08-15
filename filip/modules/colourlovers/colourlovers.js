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

        palette.colors.forEach(function (hexcolor, index) {

          stylesheet = stylesheet.split("CL" + index).join("#" + hexcolor);
          stylesheet = stylesheet.split("CLcont" + index).join(getContrastYIQ(hexcolor));

        });

        pass(stylesheet);

      });

    });

  })

};

var fs = require("fs");

iris.modules.colourlovers.registerHook("hook_request_intercept", 0, function (thisHook, data) {

  if (thisHook.context.req.url === "/themes/filip/colours.css") {

    var stylesheet = fs.readFileSync(iris.sitePath + "/themes/filip/static/colours.css", "utf8")

    convert(stylesheet).then(function (output) {

      thisHook.context.res.setHeader('content-type', 'text/css');
      thisHook.context.res.send(output);

    });

  } else {

    thisHook.pass(data);

  }

})
