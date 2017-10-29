// Takes a selector, wraps individual letters within it in spans, calling the callback function on each span.
// LoopLength is an incrementing and resetting index passed to the callback

let letterWrap = function(selector, callback, loopLength) {

  Array.from(document.querySelectorAll(selector), function(element) {

    let text = element.innerText,
      counter = 0;

    element.innerText = "";

    Array.from(text, function(letter, index) {

      counter = (counter < loopLength ? counter += 1 : 0);

      let span = document.createElement("span");
      span.innerHTML = letter;
      span.setAttribute("aria-hidden", true);

      callback(span, counter, index);

      element.appendChild(span);

    });

  })

}

// Takes an array of css colour values and creates css classes for them

let colourStyleRules = function(colourArray) {

  let sheet = document.head.appendChild(document.createElement("style")).sheet;

  colourArray.forEach(function(colour, index) {

    sheet.insertRule("html { --colour" + index + ": " + colour + " }", sheet.cssRules.length);

  })

  return sheet;

}

colourStyleRules(tinycolor("hsl(" + Math.random() * 360 + ", 80%, 35%)").tetrad());

letterWrap("h1.striped", function(element, index, fullIndex) {

  element.setAttribute("class", "striped-background");

}, 3);

letterWrap(".music-heading", function(element, index, fullIndex) {

  if (Math.floor(Math.random() * 2) === 1) {

    element.setAttribute("style", "position:relative; top:0." + Math.floor(Math.random() * 3) + 1 + "em");

  } else {

    element.setAttribute("style", "position:relative; bottom:0." + Math.floor(Math.random() * 3) + 1 + "em");

  }

  element.setAttribute("class", "striped-colour");

}, 3);
