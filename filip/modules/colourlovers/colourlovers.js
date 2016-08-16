var http = require("http");

iris.modules.frontend.registerHook("hook_frontend_embed__colours", 0, function (thisHook, data) {

  var blackwhite;

  if (thisHook.context.vars.req.cookies && thisHook.context.vars.req.cookies.blackwhite && thisHook.context.vars.req.cookies.blackwhite === "true") {

    blackwhite = true;

  }
  
  if (thisHook.context.vars.req.query && thisHook.context.vars.req.query.blackwhite && thisHook.context.vars.req.query.blackwhite === "true") {

    blackwhite = true;

  }
  
   if (thisHook.context.vars.req.query && thisHook.context.vars.req.query.blackwhite && thisHook.context.vars.req.query.blackwhite === "false") {

    blackwhite = false;

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

      var output = {};

      output.blackwhite = blackwhite;
      output.palette = result[0];
      palette.colors.forEach(function (hexcolor, index) {

        if (!blackwhite) {

          output["CL" + index] = "#" + hexcolor;
          output["CLcont" + index] = getContrastYIQ(hexcolor);

        } else {

          output["CL" + index] = "white";
          output["CLcont" + index] = "black";

        }

      });

      thisHook.pass({
        variables: [output]
      });

    });

  });

})

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

  thisHook.pass(data);

})
