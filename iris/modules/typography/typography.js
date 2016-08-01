// Only for server side 
var typogr = require('typogr');

iris.modules.typography.registerHook("hook_entity_view", 1, function (thisHook, data) {

  if (data.body) {

    data.body = typogr.typogrify(data.body);

  }

  thisHook.pass(data);

})
