const express = require('express');
const  cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.json())
const mockData = require('./mock')
const port = process.env.PORT || 5000;
//adding route to fetch json data
app.get('/json', (req,res) => {
    res.send(JSON.stringify(mockData));
})

app.listen(port, () => {
    console.log('server listening at 5000');
})