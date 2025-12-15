const form = document.getElementById('employeeForm');

function showError(input) {
  input.classList.add('error');
}

function clearError(input) {
  input.classList.remove('error');
}

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const inputs = ['firstName', 'lastName', 'designation', 'address', 'state'];
  inputs.forEach(id => clearError(document.getElementById(id)));

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

  // Redirect to success page after validation passes
  window.location.href = "success.html";
});
