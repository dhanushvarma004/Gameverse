const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// In-memory database (for demonstration purposes)
const users = [];

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/register', (req, res) => {
    const { username, name, phoneNumber, email, gender, password } = req.body;
    const user = { username, name, phoneNumber, email, gender, password };
    users.push(user);
    res.json({ message: 'User registered successfully' });
});

app.get('/api/user', (req, res) => {
    // For simplicity, returning the first user (assuming single user scenario)
    if (users.length > 0) {
        res.json(users[0]);
    } else {
        res.status(404).json({ message: 'No user found' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
