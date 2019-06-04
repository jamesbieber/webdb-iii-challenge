
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: "James Bieber", cohort_id: "WEBPT4"},
        {name: "John Doe", cohort_id: "WEBPT5"},
        {name: "John Moe", cohort_id: "WEBPT5"}
      ]);
    });
};
