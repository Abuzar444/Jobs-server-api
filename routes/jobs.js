const express = require('express')
const { createJob, getAllJobs, updateJob, deleteJob, getJob } = require('../controllers/jobs')
const router = express.Router()

router.route('/').post(createJob).get(getAllJobs)
router.route('/:id').patch(updateJob).delete(deleteJob).get(getJob)

module.exports = router