const btn = document.querySelector('.btn button');
const firstInput = document.querySelector('.firts-input')
const twoInput = document.querySelector('.two-input');

function validate(firstInput, twoInput) {
  if (firstInput.value !== '123456' || twoInput.value !== '123456') {
    alert('Username yoki parol noto‘g‘ri. Ikkalasi ham "123456" bo`lishi kerak');
    return false;
  }
  return true;
}

btn.addEventListener('click', function (event) {
  event.preventDefault();

  const isValid = validate(firstInput, twoInput);
  if (!isValid) {
    return;
  }

  window.location.href = 'pages/home.html'; // home.html ning to'g'ri yo'li




});
