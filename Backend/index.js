require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
require('./passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth');
const resumeRoute = require('./routes/resumeDataHandler');
const offerLetterRoute = require('./routes/offerLetterDataHandler');
const editRoutes = require('./routes/editRoutes');
const port = 5000 || process.env.PORT;
const connectDB = require('./config/db');
connectDB();

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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/auth', authRoute);
app.use('/resume', resumeRoute);
app.use('/offer_letter', offerLetterRoute);
app.use('/edit', editRoutes);

app.listen(port, () => {
    console.log(`server started on port ${port}!`);
})