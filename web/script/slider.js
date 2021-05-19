document.addEventListener("DOMContentLoaded", function () {
  // инициализация 1 слайдера с нужными настройками
  new SimpleAdaptiveSlider("#slider", {
    loop: true,
    autoplay: true,
    interval: 3000,
    swipe: true,
  });
  // инициализация 2 слайдера с нужными настройками
  new SimpleAdaptiveSlider("#slider_2", {
    loop: true,
    autoplay: true,
    interval: 3000,
    swipe: true,
  });
});
