const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 5000 || process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.post('/templates/resume', (req, res) => {
    // console.log(req.body);
})

app.listen(port, (req, res) => {
    console.log("server started!");
})