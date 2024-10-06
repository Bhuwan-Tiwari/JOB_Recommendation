const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');


router.post('/recommendation', jobController.recommendJobs);

module.exports = router;
