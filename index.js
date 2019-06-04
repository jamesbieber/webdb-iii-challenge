const express = require('express')
const knex = require('knex')

const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: "./data/roles.db3"
    },
    useNullAsDefault: true
}

const server = express();

const dbCohorts = require("./data/models/cohortsModel")
const dbStudents = require("./data/models/studentsModel")

server.use(express.json());

server.get('/api/cohorts', async (req, res) => {
    try {
        const cohorts = await dbCohorts.getCohorts()
        res.status(201).json(cohorts);
    }
    catch(error) {
        res.status(500).json({message: "Could not retrieve cohorts"})
    }
})

server.get('/api/cohorts/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const cohort = await dbCohorts.getById(id)
        res.status(201).json(cohort)
    }
    catch(error) {
        res.status(500).json({message: "Could not retreive cohort"})
    }
})

server.get('/api/cohorts/:id/students', async (req,res) => {
    try {
        const id = req.params.id;
        const students = await dbCohorts.getStudents(id)
        res.status(201).json(students);
    }
    catch(error) {
        res.status(500).json({message: "Could not retrieve students"})
    }
})




const port = process.env.PORT || 3000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);