
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: "James Bieber", cohort_id: 1},
        {name: "John Doe", cohort_id: 2},
        {name: "John Moe", cohort_id: 2}
      ]);
    });
};
