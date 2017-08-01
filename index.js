const express = require('express')
const Timestamp = require('./controllers/Timestamp')

const app = express()
app.set('port', (process.env.PORT || 5000))

// Set-up template engine
app.set('view engine', 'ejs')

app.get('/', ( req, res ) => {
    res.render('index')
})

// Timestamp 
Timestamp(app)

// Listen to the port
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

