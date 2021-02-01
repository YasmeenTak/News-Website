$(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
        loop: false,
      },
    },
  });
});

var $ticker = $('[data-ticker="list"]'),
  tickerItem = '[data-ticker="item"]';
(itemCount = $(tickerItem).length), (viewportWidth = 0);

function setupViewport() {
  $ticker.find(tickerItem).clone().prependTo('[data-ticker="list"]');

  for (i = 0; i < itemCount; i++) {
    var itemWidth = $(tickerItem).eq(i).outerWidth();
    viewportWidth = viewportWidth + itemWidth;
  }

  $ticker.css('width', viewportWidth);
}

function animateTicker() {
  $ticker.animate(
    {
      marginRight: -viewportWidth,
    },
    30000,
    'linear',
    function () {
      $ticker.css('margin-right', '0');
      animateTicker();
    }
  );
}

function initializeTicker() {
  setupViewport();
  animateTicker();

  $ticker
    .on('mouseenter', function () {
      $(this).stop(true);
    })
    .on('mouseout', function () {
      animateTicker();
    });
}

initializeTicker();
