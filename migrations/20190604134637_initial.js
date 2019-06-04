
exports.up = async function(knex, Promise) {
  await knex.schema.createTable('cohorts', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable().unique();
  })

  await knex.schema.createTable('students', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable();
      tbl.integer('cohort_id').references('id').inTable('cohorts').onDelete('CASCADE').onUpdate('CASCADE');
  })
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTableIfExists('students')
  await knex.schema.dropTableIfExists('cohorts')
};
