//Import express.js
const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

//Initialize express
const app = express();

const port = process.env.PORT;

//Return static page
app.use(express.static(`${__dirname}/public`))

//Create route request
app.route('/oyefule-oluwatayo').get((req, res) => {
   res.status(200).json({
      slackUsername: "gentcod",
      backend: true,
      age: 25,
      bio: "A Frontend developer with interest in Backend Development."
   })
})

app.listen(port, ()=> {
   console.log('App is listening for request');
})