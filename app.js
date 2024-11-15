const express = require('express')
const app = express()
const port = 3000


app.set('view engine', 'ejs');

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('home');
})

app.get('/about', (req, res) => {
    res.render('about');
})
  
app.get('/skills', (req, res) => {
    res.render('skills');
})

app.get('/portfolio', (req, res) => {
    res.render('portfolio');
})

app.get('/contact', (req, res) => {
    res.render('contact');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})