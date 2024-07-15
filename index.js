// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message); // Show success message
            window.location.href = 'home.html'; // Redirect to home page on successful login
        } else {
            alert(result.message); // Show error message on failed login
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});

document.querySelector('.register-link').addEventListener('click', function() {
    window.location.href = 'register.html';
});