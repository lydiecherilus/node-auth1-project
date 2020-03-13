const express = require("express")
const { restrict } = require("../middleware/restrict")
const Users = require('./users-model.js');

const router = express.Router();

router.get('/', restrict(), (req, res) => {
     Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  });

  module.exports = router;