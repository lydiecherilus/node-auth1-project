const bcrypt = require("bcryptjs")
const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

async function add(user) {
    user.password = await bcrypt.hash(user.password, 15)
      const [id] = await db("users").insert(user)
      return findById(id)
  }
  
  function find() {
      return db("users").select("id", "username")
  }
  
  function findBy(filter) {
      return db("users")
          .select("id", "username", "password")
          .where(filter)
  }
  
  function findById(id) {
      return db("users")
          .select("id", "username")
          .where({ id })
          .first()
  }