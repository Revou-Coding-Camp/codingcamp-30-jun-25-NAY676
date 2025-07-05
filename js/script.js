// Utility to format current date and time with timezone info
function getCurrentDateTimeString() {
    return new Date().toString();
  }

  // Form validation and submission handling
  const form = document.getElementById('messageForm');
  const responseOutput = document.getElementById('responseOutput');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous errors
    ['name', 'birthdate', 'message'].forEach(id => {
      document.getElementById(id + 'Error').classList.add('hidden');
    });
    document.getElementById('genderError').classList.add('hidden');

    const formData = new FormData(form);
    const name = formData.get('name').trim();
    const birthdate = formData.get('birthdate');
    const gender = formData.get('gender');
    const message = formData.get('message').trim();

    let valid = true;
    if (!name) {
      document.getElementById('nameError').classList.remove('hidden');
      valid = false;
    }
    if (!birthdate) {
      document.getElementById('birthdateError').classList.remove('hidden');
      valid = false;
    }
    if (!gender) {
      document.getElementById('genderError').classList.remove('hidden');
      valid = false;
    }
    if (!message) {
      document.getElementById('messageError').classList.remove('hidden');
      valid = false;
    }

    if (!valid) return;

    // Create output string with submitted data and current time
    const output = 
      `Current time : ${getCurrentDateTimeString()}\n` +
      `Nama : ${name}\n` +
      `Tanggal lahir : ${birthdate}\n` +
      `Jenis Kelamin : ${gender}\n` +
      `Pesan : ${message}`;

    responseOutput.textContent = output;

    // Optionally, scroll response into view or focus for screen readers
    responseOutput.focus();

    // Reset form after submission
    form.reset();
  });