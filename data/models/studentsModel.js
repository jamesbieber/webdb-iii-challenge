const knex = require('knex');
const knexFile = require('../../knexfile')
const db = knex(knexFile.development)

module.exports = {
    getStudents,
  };
  
  function getStudents() {
    return db("students");
  }