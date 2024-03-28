let intervalId;

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  } // console.log(color);
  // document.querySelector('body').style.backgroundColor = `${color}`;
  return color;
};

// method 1
// const randomColor = function (str) {
//   const max = 255;
//   const min = 0;
//   const r = Math.floor(Math.random() * (max - min + 1)) + min;
//   const g = Math.floor(Math.random() * (max - min + 1)) + min;
//   const b = Math.floor(Math.random() * (max - min + 1)) + min;
//   document.querySelector('body').style.backgroundColor =
//     'rgb(' + r + ',' + g + ',' + b + ')';
// };
// method 2

const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeColor, 1000);
  }

  function changeColor() {
    // document.getElementsByTagName('body')[0].style.backgroundColor =
    //   randomColor();
    document.body.style.backgroundColor = randomColor();
  }
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', function () {
  clearInterval(intervalId);
  intervalId = null;
});
