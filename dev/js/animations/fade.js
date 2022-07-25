var fadeOut = function fadeOut(element, delay) {
  if (!element.style.opacity) element.style.opacity = 1;
  var opacity = 1;
  return new Promise(function (resolve) {
    var fadeEffect = setInterval(function () {
      opacity -= delay / (10 * delay);

      if (opacity > 0) {
        element.style.opacity = opacity;
      } else {
        clearInterval(fadeEffect);
        resolve();
      }
    }, delay / 10);
  });
};

var fadeIn = function fadeIn(element, delay) {
  console.log(element);
  element.style.display = "";
  element.style.opacity = 0;
  var opacity = 0;
  return new Promise(function (resolve) {
    var fadeEffect = setInterval(function () {
      opacity += delay / (10 * delay);

      if (opacity < 1) {
        element.style.opacity = opacity;
      } else {
        clearInterval(fadeEffect);
        resolve();
      }
    }, delay / 10);
  });
};

export { fadeIn, fadeOut };