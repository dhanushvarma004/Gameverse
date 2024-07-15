document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameText = document.getElementById('username-text');
    const nameText = document.getElementsByName('name')[0];
    const phoneNumberText = document.getElementsByName('phoneNumber')[0];
    const emailText = document.getElementsByName('email')[0];
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const passwordText = document.getElementById('password');
    const confirmPasswordText = document.getElementById('confirmPassword');

    const username = usernameText.value;
    const name = nameText.value;
    const phoneNumber = phoneNumberText.value;
    const email = emailText.value;
    const password = passwordText.value;
    const confirmPassword = confirmPasswordText.value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        setTimeout(() => {
            // Clear the password fields after displaying the alert
            passwordText.value = '';
            confirmPasswordText.value = '';
        }, 1000); // Show alert for 1 second
        return;
    }

    if (isValidEmail(email)) {
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, name, phoneNumber, email, gender, password, confirmPassword })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'User registered successfully') {
                showPopupAndRedirect();
            } else {
                alert(data.message);
            }
        })
        .catch((error) => {
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
        window.location.href = 'index.html';
    }, 1500); // Redirect after 1.5 seconds
}

document.querySelector('.btn').addEventListener('click', function() {
    window.location.href = 'index.html';
});

function handleSubmit(event) {
    event.preventDefault();

    const username = document.getElementsByName('username')[0].value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        setTimeout(() => {
            document.getElementById('password').value = '';
            document.getElementById('confirmPassword').value = '';
        }, 1000); // Clear password fields after 1 second
        return;
    }

    // Additional validation or API call (if needed) can go here

    // Assuming successful registration, show popup and redirect
    showPopupAndRedirect();
}

function showPopupAndRedirect() {
    const popup = document.getElementById('popupMessage');
    popup.style.display = 'block';

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500); // Redirect after 1.5 seconds
}