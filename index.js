require('dotenv').config();

const express = require('express');
const cors = require('cors');


const app = express();
const port = process.env.PORT

const testObject = [
    {id: 1, name: "Ekpa"},
    {id: 2, name: "Sha"},
    {id: 3, name: "Jem"},
]


app.use(express.static(__dirname + '/client/dist'))
app.use(express.json())
app.use(cors())


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/client/dist/index.html')
})
app.get('/api/friends', (request, response) => {
    response.json(testObject)
})

app.listen(port, ()=> {
    console.log("server dey hear")
})