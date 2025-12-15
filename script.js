const form = document.getElementById('employeeForm');
const successMessage = document.getElementById('successMessage');

function showError(input) {
  input.classList.add('error');
}

function clearError(input) {
  input.classList.remove('error');
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Clear previous errors
  const inputs = ['firstName', 'lastName', 'designation', 'address', 'state'];
  inputs.forEach(id => clearError(document.getElementById(id)));
  successMessage.textContent = '';

  // Validate all fields
  let valid = true;
  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (!el.value.trim()) {
      showError(el);
      valid = false;
    }
  });

  if (!valid) {
    alert('Please fill all the required fields.');
    return;
  }

  // Show success message and clear form
  successMessage.textContent = 'Data Saved Successfully!';
  form.reset();

  // Disable submit button while message is shown
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;

  setTimeout(() => {
    successMessage.textContent = '';
    submitBtn.disabled = false;
  }, 30000); // 30 seconds
});
