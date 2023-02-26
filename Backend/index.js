require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
// require('./passport')
const passportStrategy = require("./passport");
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth');
const port = 5000 || process.env.PORT;

app.use(
    cookieSession({
        name: 'session',
        keys: ['genletter'],
        maxAge: 24 * 60 * 60 * 100
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,PUT,POST,DELETE',
    credentials: true
}));

app.use('/auth', authRoute);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
    console.log("server started!");
})