document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    document.getElementById('usernameDisplay').textContent = username;
    window.location.href = 'dashboard.html';
});
