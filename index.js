require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoute = require('./routes/userRoute');

const app = express();
const PORT = process.env.PORT;

app.use(cors());

// Parse to application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

app.use('/user', userRoute);

app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
});
