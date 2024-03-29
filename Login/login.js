document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('form').addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.querySelector('input[type="text"]').value;
      const password = document.querySelector('input[type="password"]').value;
      
      if (username === 'om_patel' && password === '12345678') {
          window.location.href = 'https://www.google.com/';
      } else {
          const message = document.querySelector('.message');
          message.textContent = 'Invalid username or password';
      }
  });

  document.getElementById('togglePassword').addEventListener('click', function() {
      const password = document.getElementById('pass');
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      this.classList.toggle('bi-eye');
      this.classList.toggle('bi-eye-slash');
  });

  document.getElementById('pass').addEventListener('input', function() {
      const password = this.value;
      const validPass = document.getElementById('vaild-pass');
      if (password.length < 8) {
          validPass.textContent = 'Minimum Characters 8';
      } else {
          validPass.textContent = '';
      }
  });
});
