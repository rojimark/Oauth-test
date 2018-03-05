const express = require('express');
const app = express();
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup')
// set up a view engine

app.set('view engine', 'ejs');

// setup routes

app.use('/auth',authRoutes);
// create home route

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(3000, () => {
  console.log('server is now running');
})
