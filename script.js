// Preencher o campo de email se estiver armazenado no localStorage
document.getElementById('email').value = localStorage.getItem('email') || '';

function validateFields() {
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid();

    // Armazenar o email se a opção "Lembrar de mim" estiver marcada
    if (document.getElementById('remember-me').checked && emailValid) {
        localStorage.setItem('email', document.getElementById('email').value);
    }

    document.getElementById('password-button').disabled = !emailValid;
    document.getElementById('login-button').disabled = !emailValid || !passwordValid;
}

function isEmailValid() {
    const email = document.getElementById("email").value;
    const isValid = validateEmail(email);
    document.getElementById("email-error").style.display = isValid ? "none" : "block";
    document.getElementById("email-error").classList.toggle('show', !isValid);
    return isValid;
}

function isPasswordValid() {
    const password = document.getElementById('password').value;
    const isValid = password.length >= 8 && /\d/.test(password) && /[!@#$%^&*]/.test(password);
    document.getElementById("password-error").style.display = isValid ? "none" : "block";
    document.getElementById("password-error").classList.toggle('show', !isValid);
    return isValid;
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function submitForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulação de envio ao backend
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }).then(response => response.json())
      .then(data => {
          if (data.success) {
              alert('Login realizado com sucesso!');
              // Redirecionar para a página "home.html"
              Login();
          } else {
              alert('Erro ao fazer login. Verifique suas credenciais.');
          }
      });
}

function Login() {
    window.location.href = "home.html";
}