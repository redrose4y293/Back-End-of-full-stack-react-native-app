const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const bcrypt = require('bcrypt');
const cors = require('cors')
const connectdb = require("./config/config");
const app = express()
dotenv.config()
connectdb()
const PORT = process.env.PORT || 5002

app.use(cors());
app.use(express.json())
app.use(morgan("dev"))
app.get("/", (req, resp) => {
    resp.send("<h1>Server Start</h1>")
})


app.listen(PORT, () => {
    console.log(`Server Start ${PORT}`.bgRed.white);
});


