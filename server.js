const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();
const PORT = process.env.PORT || 5000;
const User = require('./User/userSchema');

server.use(cors());

server.get('/test', (req, res) => {
  User.findOne({ _id: '5ad576e65f693200148d4367' })
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => console.log(err));
});

mongoose
  .connect('mongodb://admin:admin@ds247569.mlab.com:47569/allergy-allgood')
  .then(succ => {
    server.listen(PORT, () => {
      console.log(`Server up on port ${PORT}`);
    });
  })
  .catch(err => console.log('Error connecting to MLAB'));
