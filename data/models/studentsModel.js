const knex = require('knex');
const knexFile = require('../../knexfile')
const db = knex(knexFile.development)

module.exports = {
    getStudents,
    getById,
    insert,
  };
  
  function getStudents() {
    return db("students");
  }
  
  function getById(id) {
    return db("students").where({ id }).first();
  }
  
  function insert(student) {
    return db("students")
      .insert(student)
      .then(ids => {
        return getById(ids[0]);
      });
  }