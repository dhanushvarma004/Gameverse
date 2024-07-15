// models/User.js
// server.js
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.sendFile(path.join(_dirname,'register.html'))
})

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/registration', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(express.static(_dirname,'register.html'));

// Routes
app.post('/register', async (req, res) => {
    try {
        const { username, name, gender, email, phonenumber, password } = req.body;
        const newUser = new User({ username, name, gender, email, phonenumber, password });
        await newUser.save();
        res.status(200).send('You have successfully registered');
    } catch (error) {
        res.status(500).send('An error occurred: ' + error.message);
    }
});



const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    name: { type: String, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true },
    phonenumber: { type: String, required: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

app.listen(port, () => {
    console.log("Server started");
});
