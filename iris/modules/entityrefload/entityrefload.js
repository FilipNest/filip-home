iris.modules.entityReference.registerHook("hook_entity_fetch", 1, function (thisHook, data) {
    
  if (data && data.length) {

    if (thisHook.context && thisHook.context.loadReferences) {

      var hooks = [];

      data.forEach(function (entity, index) {

        // TODO add fieldset support

        thisHook.context.loadReferences.forEach(function (referenceField) {

          if (entity[referenceField]) {

            if (Array.isArray(entity[referenceField])) {

              entity[referenceField].forEach(function (reference, innerIndex) {

                hooks.push({
                  search: reference,
                  field: referenceField,
                  entityIndex: index,
                  fieldIndex: innerIndex
                })

              })

            } else {

              hooks.push({
                search: entity[referenceField],
                field: referenceField,
                entityIndex: index
              })

            }

          }

        })

      })

      if (hooks.length) {

        var counter = 0;
        var done = function () {

          counter++;

          if (counter >= hooks.length) {

            thisHook.pass(data);

          }

        }

        hooks.forEach(function (hook) {

          iris.invokeHook("hook_entity_fetch", thisHook.authPass, {
            entities: [hook.search.entityType],
            queries: [{
              "field": "eid",
              "operator": "is",
              "value": hook.search.eid
                    }]
          }).then(function (entity) {

            if (entity && entity[0]) {

              if (typeof hook.fieldIndex === "undefined") {

                data[hook.entityIndex][hook.field] = entity[0];

              } else {

                data[hook.entityIndex][hook.field][hook.fieldIndex] = entity[0];

              }

            }

            done();

          }, function (fail) {

            done();

          })

        })

      } else {

        thisHook.pass(data);

      }


    } else {

      thisHook.pass(data);

    }

  } else {

    thisHook.pass(data);

  }


})
