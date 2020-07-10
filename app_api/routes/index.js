const express = require('express');
const router = express.Router();
const ctrlVolunteers = require('../controllers/volunteer');
const ctrlRequest = require('../controllers/servicerequest');


router
  .route('/volunteer')
  .post(ctrlVolunteers.volunteerCreate);

router
  .route('/servicerequest')
  .get(ctrlRequest.requestRead)
  .post(ctrlRequest.servReqCreate);

router
  .route('/servicerequest/:srvReqid')
  .get(ctrlRequest.requestsReadOne)
  .put(ctrlRequest.srvReqUpdateOne);

module.exports = router;
