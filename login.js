document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        window.location.href = 'index.html';
    } else {
        alert('Usuário ou senha incorretos!');
    }
});
