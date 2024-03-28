const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'Please Give a Valid Height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Please Give a Valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      result.innerHTML += `<div>You are Under Weight</div>`;
    } else if (bmi > 24.9) {
      result.innerHTML += `<div>You are Overweight</div>`;
    } else {
      result.innerHTML += `<div>You are in Normal Range</div>`;
    }
  }
});
