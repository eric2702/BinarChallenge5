const fs = require('fs')
const express = require('express')
const app = express()

//import json file
let dataJSON = require('./JSON/data.json')

//set view engine
app.set('view engine', 'ejs')
//body parser
app.use(express.urlencoded({ extended: true }))
//css js images
app.use(express.static('public'))


//routing
//home
app.get('/', (req, res) => {
    res.redirect('/home')
})

app.get('/home', (req, res) => {
    res.render('home')
})

//login
app.get('/login', (req, res) => {
    const status = req.query.status
    res.render('login', {status})
})

app.post('/login', (req, res) => {
    let loginInput = req.body
    if(dataJSON.find(i => (i.email === loginInput.email && i.password === loginInput.password))) {
        res.redirect('/game')
    } else {
        res.redirect('/login?status=wrong')
    }
})

//game
app.get('/game', (req, res) => {
    res.render('game')
})

//404 handler
app.get('*', (req, res) => {
    res.status(404).send("Page Doesn't Exist")
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})