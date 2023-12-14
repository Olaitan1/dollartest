const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const db = require('./config');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoute = require('./routes/user')

const dotenv = require('dotenv')


dotenv.config()
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(logger("dev"));
app.use(cookieParser());




app.use('/api', authRoute)

app.get('/', (req, res) =>
{
    res.send("Welcome to HTML")
})
app.listen(port, () =>
{
    console.log(`Server Running on Port ${port}`)
})


