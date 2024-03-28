const buttons = document.querySelectorAll('.button');

const body = document.getElementsByTagName('body');

buttons.forEach((ele) => {
  ele.addEventListener('click', (e) => {
    document.body.style.backgroundColor = `${e.target.id}`;
  });
});
