$(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });
});

$(function () {
  $(document).ready(function () {
    $('#newsTicker2').breakingNews({
      direction: 'rtl',
    });
  });
});

// var www = document.querySelector('.wrp'),
//   ttt = document.querySelector('.ticker'),
//   mov = document.querySelector('.moving');

/*
www.addEventListener('mouseover',pause,false);
www.addEventListener('mouseleave',play,false);
function pause(){ttt.style.animationPlayState="paused";}
function play(){ttt.style.animationPlayState="running";}
*/

// ttt.addEventListener('animationiteration', cnsl, false);
// //ttt.addEventListener("animationstart", shortLoop, false);
// ttt.addEventListener('animationstart', strt, false);

// function cnsl() {
//   console.log('fds');
// }
// function strt() {
//   var movCoor = mov.getBoundingClientRect(),
//     wrapCoor = www.getBoundingClientRect(),
//     duration = ((movCoor.width / wrapCoor.width) * 20).toFixed() + 's';
//   durationAttribute = 'animation-duration:' + duration;
//   console.log(duration);
//   ttt.setAttribute('style', durationAttribute);
// }

// function shortLoop() {
//   ttt.classList.remove('anim');
//   console.log('now');
//   ttt.offsetWidth = ttt.offsetWidth;
//   setTimeout(function () {
//     ttt.classList.add('anim');
//     console.log('now');
//   }, 10);
// }

// setInterval(function () {
//   var movCoor = mov.getBoundingClientRect(),
//     tickCoor = ttt.getBoundingClientRect(),
//     wrapCoor = www.getBoundingClientRect();

//   console.log(movCoor.left, wrapCoor.left + wrapCoor.width);
//   // console.log(wrapCoor.width);
//   // console.log(wrapCoor.left);

//   var duration = (movCoor.width / wrapCoor.width) * 10 + 's';
//   console.log(duration);

//   if (wrapCoor.left + wrapCoor.width < movCoor.left) {
//     if (movCoor.left > 0) {
//       shortLoop();
//     }
//   }
// }, 1000 / 1);
