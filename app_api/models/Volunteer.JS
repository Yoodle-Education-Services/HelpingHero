const mongoose = require('mongoose');

const Volunteer = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipcode: {
    type: String,
    required: true
  },
  phoneNumber: {
      type: String,
      required: true
  },
  dateofBirth: {
    type: Date,
    'default': Date.now
  },
 category:[String]
  
});



mongoose.model('Volunteer',Volunteer);