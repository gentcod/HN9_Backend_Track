//Import express.js
const express = require('express');

//Initialize express
const app = express();

//Create route request
app.route('/oyefule-oluwatayo').get((req, res) => {
   res.status(200).json({
      slackUsername: "gentcod",
      backend: true,
      age: 25,
      bio: "A Frontend developer with interest in Backend Development."
   })
})

app.listen(8000, ()=> {
   console.log('App is listening for request');
})