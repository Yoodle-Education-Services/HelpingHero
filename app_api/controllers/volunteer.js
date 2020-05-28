const mongoose = require('mongoose');
const volunteer = mongoose.model('Volunteer');


const volunteerCreate = function (req, res) {
  volunteer.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    Email: req.body.Email,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode,
    phoneNumber: req.body.phoneNumber,
    dateofBirth: req.body.dateofBirth,
    category: [req.body.category]
  
    
  }, (err, volunteer) => {
    if (err) {
      res
        .status(400)
        .json(err);
    } else {
      res
        .status(201)
        .json(volunteer);
    }
  });
};


module.exports = {
  volunteerCreate
 
};
