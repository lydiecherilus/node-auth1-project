const bcrypt = require("bcryptjs")
const Users = require('../users/users-model.js');

const router = require('express').Router();

// Register a user
router.post("/register", async (req, res, next) => {
  try {
    const { username } = req.body
    const user = await Users.findBy({ username }).first()

    if (user) {
      return res.status(409).json({
        message: "Username already taken",
      })
    }
    res.status(201).json(await Users.add(req.body))
  } catch (err) {
    next(err)
  }
})

// Login 
router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findBy({ username }).first()
    const passwordValid = await bcrypt.compare(password, user.password)

    if (user && passwordValid) {
      res.status(200).json({ message: `Welcome ${user.username}!` });
    } else {
      res.status(401).json({ message: 'You shall not pass!' });
    }
  } catch (error) {
    next(err)
  }
})

module.exports = router;