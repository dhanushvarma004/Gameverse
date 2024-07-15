document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/register')
    .then(response => response.json())
    .then(user => {
        if (user) {
            document.getElementById('username').textContent = username;
            document.getElementById('name').textContent = Name;
            document.getElementById('phoneNumber').textContent = phoneNumber;
            document.getElementById('email').textContent = email;
            document.getElementById('gender').textContent = gender;
        } else {
            alert('No user found');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
