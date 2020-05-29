const mongoose = require('mongoose');
const srvreq = mongoose.model('serviceRequest');

const servReqCreate = function (req, res) {
  srvreq.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    Email: req.body.Email,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode,
    phoneNumber: req.body.phoneNumber,
    service: req.body.service,
    dateNeeded: req.body.dateNeeded,
    timeNeeded: req.body.timeNeeded,
    volunteerId: req.body.volunteerId
    
  }, (err, srvreq) => {
    if (err) {
      res
        .status(400)
        .json(err);
    } else {
      res
        .status(201)
        .json(srvreq);
    }
  });
};


const requestRead = function (req, res) {
  srvreq.find({}, function(err, srvreq) {
    if (err) {
      console.log(err);
    } else {
      res.json(srvreq);
    }
  });

};
const requestsReadOne = function (req, res) {
  console.log("enter");
  if (req.params && req.params.srvReqid) {
    console.log("servicerequestid api", req.params.srvReqid);
    srvreq
      .findById(req.params.srvReqid)
      .exec((err, request) => {
        if (!request) {
          res	
            .status(404) 
            .json({	
              "message": "requestId not found"
            });	 
          return;
        } else if (err) {
          res	
            .status(404) 
            .json(err); 
          return; 	
        }
        res		
          .status(200)
          .json(request);
      });
  } else {		
    res		
      .status(404) 	
      .json({	
        "message": "No requestId in request"
      });		
  }
};



const srvReqUpdateOne = function (req, res) {
  if (!req.params.srvReqid ) {
    res
      .status(404)
      .json({
        "message": "Request ID is Required "
      });
    return;
  }
  srvreq
    .findById(req.params.srvReqid)
    .select('volunteerId')
    .exec((err, serviceReq) => {
      if (!serviceReq) {
        res
          .status(404)
          .json({
            "message": "The Request ID is not found"
          });
        return;
      } else if (err) {
        res
          .status(400)
          .json(err);
        return;
      }
      serviceReq.firstName=req.body.firstName,
      serviceReq.lastName=req.body.lastName,
      serviceReq.Email=req.body.Email,
      serviceReq.city=req.body.city,
      serviceReq.state=req.body.state,
      serviceReq.zipcode=req.body.zipcode,
      serviceReq.phoneNumber=req.body.phoneNumber,
      serviceReq.service=req.body.service,
      serviceReq.dateNeeded=req.body.dateNeeded,
      serviceReq.timeNeeded=req.body.timeNeeded,
      serviceReq.volunteerId='5ecfe44f145a552e985e3f37' 
      serviceReq.save((err, serviceReq) => {
        if (err) {
          res
            .status(404)
            .json(err);
        } else {
          res
            .status(200)
            .json(serviceReq);
        }
      });

        
    })
  }

module.exports = {
  requestRead,
  srvReqUpdateOne,
  servReqCreate,
  requestsReadOne
}
