// const element = document.getElementsByClassName('a-canvas');
//
// element[0].addEventListener("click", myFunction);
//
// function myFunction() {
//   console.log("hi")
// }

const btn = document.getElementById('action-button')


AFRAME.registerComponent('cursor-listener', {
  init: function () {
    this.el.addEventListener('mouseenter', function (evt) {
      btn.style.display = 'block';
      console.log('I was hover at: ', evt.detail.intersection.point);
    });
    this.el.addEventListener('mouseleave', function (evt) {
      btn.style.display = 'none';
      console.log('I was hover OUT');
    });
  }
});

