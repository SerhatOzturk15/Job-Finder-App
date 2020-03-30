const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
app.use(cors())
const jobsContainer = require('./jobs.json');

//get all jobs
app.get('/getJobs', (req, res) => {
    if(jobsContainer){
        res.send(jobsContainer)
    }
})

//get single job
app.get('/getAJob/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = jobsContainer.data.find(item => item.id === id);
    if(item){
        return res.json({item});
    }
    throw new Error('job does not exist')
})

app.listen(port, () => console.log('listening on port 3001'))