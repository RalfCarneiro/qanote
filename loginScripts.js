function showSignUpForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

document.getElementById('cadastroLink').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'cadastro.html';
});

function login() {
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

    // Verificação "fake" do login
    if (email === 'usuario@exemplo.com' && password === 'senha123') {
        alert('Login bem-sucedido! Redirecionando para a página principal...');
        window.location.href = 'index.html'; 
    } else {
        alert('E-mail ou senha incorretos. Por favor, tente novamente.');
    }
}

function cadastrar() {
    var email = document.getElementById('loginEmail').value;
    if (email === 'usuario@exemplo.com' && password === 'senha123') {
        alert('Login bem-sucedido! Redirecionando para a página principal...');
        window.location.href = 'index.html'; 
    }
    else {
        alert('E-mail ou senha incorretos. Por favor, tente novamente.');
    }
    
}