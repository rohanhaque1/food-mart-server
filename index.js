const express = require('express');
const app = express();
const port = 5000;
// const cors = require('cors')

const recipe = require('./chefs.json')
// app.use(cors())

app.get('/', (req, res) => {
    res.send("Server is running")
})

app.get('/recipe', (req, res) => {
    res.send(recipe)
})

app.listen(port, () => {
    console.log("Server is running on port : ", port)
})
