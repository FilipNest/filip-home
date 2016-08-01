// Only for server side 
var typogr = require('typogr');

iris.modules.typography.registerHook("hook_frontend_template", 1, function (thisHook, data) {

  if (thisHook.context && thisHook.context && thisHook.context.vars && thisHook.context.vars.req) {

    var url = thisHook.context.vars.req.url;

    if (url.split("/")[1] !== "admin") {

      data.html = typogr.typogrify(data.html);

    }

  }

  thisHook.pass(data);

})
