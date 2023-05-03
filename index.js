const express = require('express');
const cors = require('cors')
const app = express();

const port = 5000;

const recipe = require('./chefs.json')
const foods = require('./foods.json')
app.use(cors());

app.get('/', (req, res) => {
    res.send("Server is running")
})

app.get('/recipe', (req, res) => {
    res.send(recipe)
})

app.get('/foods', (req, res) => {
    res.send(foods)
})

app.listen(port, () => {
    console.log("Server is running on port : ", port)
})
