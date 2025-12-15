const form = document.getElementById('profForm');
const successMessage = document.getElementById('successMessage');

// Error elements
const errors = {
  name: document.getElementById('nameError'),
  email: document.getElementById('emailError'),
  experience: document.getElementById('experienceError')
};

function clearErrors() {
  for (const key in errors) {
    errors[key].textContent = '';
    document.getElementById(key).classList.remove('error');
  }
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  clearErrors();
  successMessage.textContent = '';

  let isValid = true;

  // Validate Name
  const nameInput = form.name;
  if (!nameInput.value.trim()) {
    errors.name.textContent = 'Name is required';
    nameInput.classList.add('error');
    isValid = false;
  }

  // Validate Email
  const emailInput = form.email;
  if (!emailInput.value.trim()) {
    errors.email.textContent = 'Email is required';
    emailInput.classList.add('error');
    isValid = false;
  } else if (!validateEmail(emailInput.value.trim())) {
    errors.email.textContent = 'Email format is invalid';
    emailInput.classList.add('error');
    isValid = false;
  }

  // Experience validation
  const expInput = form.experience;
  if (!expInput.value.trim()) {
    errors.experience.textContent = 'Experience is required';
    expInput.classList.add('error');
    isValid = false;
  }

  if (!isValid) return;

  // If all valid, show success message for 30 seconds
  successMessage.textContent = 'Form Submitted Successfully!';
  form.reset();

  // Disable submit button to avoid repeated submissions during message
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;

  setTimeout(() => {
    successMessage.textContent = '';
    submitBtn.disabled = false;
  }, 30000); // 30 seconds
});
