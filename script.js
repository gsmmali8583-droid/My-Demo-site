import { saveUser } from "./firebase.js"; // Import Firebase function

const form = document.getElementById('employeeForm');
const formContainer = document.querySelector('.form-container');

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
  console.log('Attempting to save data:', formData);
  saveUser(formData).then(result => {
    console.log('Save result:', result);
    if (result.success) {
      // Show success message
      form.innerHTML = '<div style="text-align:center; color:#22c55e; font-size:24px; margin:50px 0;"><h2>Data Saved Successfully!</h2><p>Thank you for submitting your information.</p><button onclick="location.reload()" style="background:#4f46e5; color:white; padding:10px 20px; border:none; border-radius:5px; cursor:pointer;">Submit Another</button></div>';
    } else {
      alert('Error saving data: ' + result.error);
      console.error('Firebase error:', result.error);
    }
  }).catch(error => {
    console.error('Unexpected error:', error);
    alert('Unexpected error: ' + error.message);
  });
});
