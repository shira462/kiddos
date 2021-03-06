// Node.js + Express server backend for petsapp
//
// COGS121 by Philip Guo
// https://github.com/pgbovine/COGS121

// Prerequisites - first run:
//   npm install
//
// which will look in package.json and install all dependencies
// (e.g., express)
//
// To start the server, run:
//   node server.js
//
// and open the frontend webpage at http://localhost:3000/petsapp.html

const express = require('express');
const app = express();

// put all of your static files (e.g., HTML, CSS, JS, JPG) in the static_files/
// sub-directory, and the server will serve them from there. e.g.,:
//
// http://localhost:3000/petsapp.html
// http://localhost:3000/cat.jpg
//
// will send the file static_files/cat.jpg to the user's web browser
//
// Learn more: http://expressjs.com/en/starter/static-files.html
app.use(express.static('static_files'));


// simulates a database in memory, to make this example simple and
// self-contained (so that you don't need to set up a separate database).
// note that a real database will save its data to the hard drive so
// that they become persistent, but this fake database will be reset when
// this script restarts. however, as long as the script is running, this
// database can be modified at will.

/*
const fakeDatabase = {
  'Philip': { job: 'professor', pet: 'cat.jpg' },
  'John': { job: 'student', pet: 'dog.jpg' },
  'Carol': { job: 'engineer', pet: 'bear.jpg' }
};*/

const fakeData =
{
  "preset": {
    "category": {
      "img": "https://image.flaticon.com/icons/png/128/42/42829.png",
      "subcategory": "https://image.flaticon.com/icons/png/128/42/42829.png"
    }
  },
  "users": {
    "mario": {
      'dinasaurs': {
        'T Rex': 'https://www.shareicon.net/data/128x128/2016/04/13/491786_trex_252x298.png'
      },
      'dogs': {
        'terrier': 'https://www.petplan.co.uk/images/breeds/sm/westhighland-white-terrier.jpg'
      }
    }
  }
}



// To learn more about server routing:
// Express - Hello world: http://expressjs.com/en/starter/hello-world.html
// Express - basic routing: http://expressjs.com/en/starter/basic-routing.html
// Express - routing: https://expressjs.com/en/guide/routing.html


// GET a list of all usernames
//
// To test, open this URL in your browser:
//   http://localhost:3000/users

app.get('/browse/preset', (req, res) => {
  const data = fakeData;
  const presetData = fakeData.preset;
  console.log(presetData);
  res.send(presetData);
});


// GET profile data for a user
//
// To test, open these URLs in your browser:
//   http://localhost:3000/users/Philip
//   http://localhost:3000/users/Carol
//   http://localhost:3000/users/invalidusername



/*
app.get('/users/:userid', (req, res) => {
  const nameToLookup = req.params.userid; // matches ':userid' above
  const val = fakeDatabase[nameToLookup];
  console.log(nameToLookup, '->', val); // for debugging
  if (val) {
    res.send(val);
  } else {
    res.send({}); // failed, so return an empty object instead of undefined
  }
});*/

// start the server at URL: http://localhost:3000/
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});







