const knex = require('knex');
const knexFile = require('../../knexfile')
const db = knex(knexFile.development)

module.exports = {
    getCohorts,
    getById,
    getStudents,
    insert,
    remove,
    update
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
      .where({ cohort_id: id });
}

function update(update, id) {
    return db('cohorts')
    .where({ id })
    .update(update, '*');
}

function remove(id) {
    return db('cohorts')
    .where({ id })
    .del();
}