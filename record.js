const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/process_health_assessment', (req, res) => {
  // Retrieve data from form
  const name = req.body.name;
  const age = req.body.age;
  const gender = req.body.gender;
  const weight = req.body.weight;
  const What type of food did you  consume in last 24 hours? = req.body.What type of food did you  consume in last 24 hours?;
  const Junk Food = req.body.Junk Food;
  const Drinks = req.body.Drinks;
  const Light Food = req.body.Light Food;
  const other = req.body.other;
  const Are_you_alchoholic? = req.body.Are_you_alchoholic?;
  const Walking = req.body.Walking;
   


  // Validate data
  if (!name || !age || !gender || !weight || !What type of food did you  consume in last 24 hours? || !Junk Food || !Drinks || !Light Food || !other || !Are_you_alchoholic? || !Walking){
    return res.status(400).send('Please fill out all fields');
  }

 //