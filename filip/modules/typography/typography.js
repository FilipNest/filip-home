// Only for server side 
var typogr = require('typogr');

iris.modules.typography.registerHook("hook_entity_view", 1, function (thisHook, data) {

  if (data && data.body) {

    data.body = typogr.typogrify(data.body);

  }

  if (data && data.intro) {

    data.intro = typogr.typogrify(data.intro);

  }

  thisHook.pass(data);

})
