const knex = require('knex');
const knexFile = require('../../knexfile')
const db = knex(knexFile.development)

module.exports = {
    getCohorts,
    getById,
    getStudents,
    insert
}

function insert(cohort) {
    return db('cohorts').insert(cohort).then(id => {
        return getById(id[0])
    })
}

function getCohorts() {
    return db('cohorts');
}

function getById(id) {
    return db('cohorts').where({id}).first();
}

function getStudents(id) {
    return db("students")
      .join("cohorts", "cohorts.id", "students.cohort_id")
      .select("students.id", "students.name", "students.cohort_id")
      .where({ cohort_id: id });
  }