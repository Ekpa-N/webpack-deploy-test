require('dotenv').config();

const express = require('express');
const cors = require('cors');


const app = express();
port = process.env.PORT;

const testObject = [
    {id: 1, name: "Ekpa"},
    {id: 2, name: "Sha"},
    {id: 3, name: "Jem"},
]

app.use(express.json())
app.use(cors())

app.get('/', (request, response) => {
    response.json(testObject)
})

app.listen(port, ()=> {
    console.log("server dey hear")
})