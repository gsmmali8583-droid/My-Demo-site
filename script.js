import { saveUser } from "./firebase.js"; // Import Firebase function

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

  // Prepare form data
  const formData = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    designation: document.getElementById('designation').value,
    address: document.getElementById('address').value,
    state: document.getElementById('state').value,
    createdAt: new Date()
  };

  // Save data to Firebase
  saveUser(formData);
});
