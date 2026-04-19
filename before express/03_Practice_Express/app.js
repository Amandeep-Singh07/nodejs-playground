const express = require('express')

const app = express(); // create express app

app.get('/homepage', (req, res) => {
    res.send("Welcome to homepage with express")
})

app.listen(3000, () => {
    console.log("Server started successfully");
})           