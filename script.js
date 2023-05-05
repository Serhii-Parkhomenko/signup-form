const button = document.getElementById('btn-submit');
const inputs = document.querySelectorAll('input');

button.addEventListener('click', (event) => {
  event.preventDefault();
  inputs.forEach(input => {
    if (input.value === '') {
      input.classList.add('invalid');
      input.previousElementSibling.style.opacity = 1;
      input.nextElementSibling.style.display = 'block';
    } else {
      input.classList.remove('invalid');
      input.previousElementSibling.style.opacity = 0;
      input.nextElementSibling.style.display = 'none';
    }
  });
  emailValidation();
});

function emailValidation() {
  const email = document.getElementById('email');
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value === '') {
    email.nextElementSibling.style.display = 'block';
    email.classList.add('invalid');
    email.previousElementSibling.style.opacity = 1;
  } else if (!email.value.match(mailformat)) {
    email.nextElementSibling.innerHTML = 'Looks like this is not an email';
    email.nextElementSibling.style.display = 'block';
    email.classList.add('invalid');
    email.previousElementSibling.style.opacity = 1;
  } else {
    email.classList.remove('invalid');
    email.nextElementSibling.style.display = 'none';
    email.previousElementSibling.style.opacity = 0;
  }
}

inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.classList.contains('invalid')) {
      input.classList.remove('invalid');
      input.previousElementSibling.style.opacity = 0;
      input.nextElementSibling.style.display = 'none';
    }
    emailValidation();
  });
});