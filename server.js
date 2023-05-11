//require express
const express = require('express');
const app = express();

//instantiations
const pokemon = require('./models/pokemon');
const port = 3000;


//use middleware
app.use((req,res,next) => {
    console.log('running on all routes');
    next();
})
//encode incoming url parameters (part of mw)
app.use(express.urlencoded({extended:false}));

//set a view engine
app.set('view engine' , 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//create routes

//default homepage
app.get('/', (req,res) => {
    res.render('Homepage');
});

//index: display all pokemon
app.get('/pokemon', (req,res) => {
    res.render('Index', {pokemon: pokemon});
})

//new: get new page so user can create a new item
app.get('/pokemon/new', (req,res) => {
    res.render('New');
})

//create: create a new pokemon
app.post('/pokemon', (req,res) => {

    pokemon.push({name: req.body.name});

    res.redirect('/pokemon');

})

//show: show the created pokemon
app.get('/pokemon/:pokemonIndex', (req,res) => {
    const pokemonIndex = req.params.pokemonIndex;

    res.render('Show', {pokemon: pokemon[pokemonIndex]});
})









//tell express to listen
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
