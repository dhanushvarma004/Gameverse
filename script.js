document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username-text').value;
    const name = document.getElementsByName('name')[0].value;
    const phoneNumber = document.getElementsByName('phoneNumber')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        setTimeout(() => {
            password.value = '';
            confirmPassword.value = '';
        }, 1000);
        return;
    }

    if (isValidEmail(email)) {
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, name, phoneNumber, email, gender, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'User registered successfully') {
                showPopupAndRedirect();
            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        alert("Invalid email address.");
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showPopupAndRedirect() {
    const popup = document.getElementById('popupMessage');
    popup.style.display = 'block';

    setTimeout(() => {
        window.location.href = 'account.html'; // Redirect to the account page
    }, 1500);
}
