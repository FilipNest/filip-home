var elasticlunr = require("elasticlunr");

var index = elasticlunr(function () {
  this.addField('title');
  this.addField('body');
  this.addField('path');
  this.setRef('id');
});

var indexSearch = function () {

  iris.invokeHook("hook_entity_fetch", "root", {
    entities: ["post"]
  }).then(function (result) {

    result.forEach(function (doc) {

      index.addDoc({
        id: doc.entityType + "_" + doc.eid,
        path: doc.path,
        title: doc.title,
        body: doc.body
      });

    })

  });

}

process.on("dbReady", function () {

  indexSearch();

})

iris.modules["404search"].registerHook("hook_catch_request", 2, function (thisHook, data) {

  if (thisHook.context.req && thisHook.context.req.method === "GET") {

    // Get words from search

    if (thisHook.context.req.url.length > 2) {

      var url = iris.sanitizeName(thisHook.context.req.url).split("_").join(" ");

      var results = index.search(url, {
        fields: {
          title: {
            boost: 10
          },
          body: {
            boost: 1
          },
          path: {
            boost: 1
          }
        }
      });

      if (!results.length) {

        thisHook.pass(data);
        return false;

      }

      iris.invokeHook("hook_entity_fetch", thisHook.authPass, {
        entities: ["post"],
        queries: [{
          "field": "eid",
          "value": parseInt(results[0].ref.split("_")[1]),
          "operator": "is"
        }]
      }).then(function (found) {

        if (found.length) {

          data = function (res) {

            res.redirect(found[0].path);

          }

          thisHook.pass(data);

        } else {

          thisHook.pass(data);

        }

      }, function (fail) {

        thisHook.pass(data);

      })

    } else {


      thisHook.pass(data);

    }

  } else {

    thisHook.pass(data);

  }


})
