function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.querySelector('.btn').addEventListener('click', function () {
  //Name
  const nameInput = document.querySelector('.inp-name');
  const nameErr = document.querySelector('.msg-name');
  //Last name
  const lnameInput = document.querySelector('.inp-last-name');
  const lnameErr = document.querySelector('.msg-last-name');
  //Email
  const emailInput = document.querySelector('.inp-email');
  const emailErr1 = document.querySelector('.error-msg-1');
  const emailErr2 = document.querySelector('.error-msg-2');
  //Password
  const passInput = document.querySelector('.inp-psd');
  const passErr = document.querySelector('.msg-psd');

  //
  const enteredEmail = emailInput.value.trim();

  // Chack name
  if (nameInput.value.trim() === '') {
    nameErr.classList.remove('hidden');
  } else {
    nameErr.classList.add('hidden');
  }

  // Chack last name
  if (lnameInput.value.trim() === '') {
    lnameErr.classList.remove('hidden');
  } else {
    lnameErr.classList.add('hidden');
  }

  // Chack email
  if (enteredEmail === '' && !isValidEmail(enteredEmail)) {
    emailErr1.classList.remove('hidden');
    emailErr2.classList.add('hidden');
  } else if (!isValidEmail(enteredEmail)) {
    emailErr1.classList.add('hidden');
    emailErr2.classList.remove('hidden');
  } else {
    emailErr1.classList.add('hidden');
    emailErr2.classList.add('hidden');
  }

  // Chack password
  if (passInput.value.trim() === '') {
    passErr.classList.remove('hidden');
  } else {
    passErr.classList.add('hidden');
  }
});
