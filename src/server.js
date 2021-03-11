const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('App page')
})

app.listen(8080, () => console.log('Server Started'))