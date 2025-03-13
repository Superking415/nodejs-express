// Importeer de benodigde modules
const express = require('express');
const path = require('path'); // Nodig om padinstellingen correct te doen
const app = express();
const port = 3000;

// Stel de view engine in op EJS
app.set('view engine', 'ejs');

// Zorg ervoor dat Express de juiste padinstelling heeft voor de views
app.set('views', path.join(__dirname, 'views'));

// Route voor de homepagina
app.get('/pages/home', (req, res) => {
  res.render('home'); // Render de home.ejs uit de views-map
});

// Start de server
app.listen(port, () => {
  console.log(`Server draait op http://localhost:${port}`);
});
