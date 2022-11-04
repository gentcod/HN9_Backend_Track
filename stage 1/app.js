//Import express.js
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config({ path: './config.env' });

//Initialize express
const app = express();

//Developer Imports
const {mathOperation} = require('./controllers/mathController');

const port = process.env.PORT;

//Return static page
app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.urlencoded({
   extended: true
 }));
app.use(bodyParser.json());

//Create route request
app.route('/oyefule-oluwatayo').get((req, res) => {
   res.status(200).json({
      slackUsername: "gentcod",
      backend: true,
      age: 25,
      bio: "A Frontend developer with interest in Backend Development."
   })
})

app.route('/math-operation').post(mathOperation);

app.listen(port, ()=> {
   if (process.env.NODE_ENV === 'devlopment') 
      console.log('App is listening for request');
})