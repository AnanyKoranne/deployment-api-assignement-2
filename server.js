require('dotenv').config();

const isAdmin = process.env.IS_ADMIN === 'true';

if (isAdmin) {
  console.log("Admin privileges granted.");
} else {
  console.log("Access restricted. Admin only.");
}

const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  if (process.env.IS_ADMIN === 'true') {
    res.send("Welcome admin you are the owner here");
  } else {
    res.send("Welcome user you just use this site");
  }
});
const port = 3000;
app.listen(port, () => console.log(`Server is running on http://localhost:${port}.`));