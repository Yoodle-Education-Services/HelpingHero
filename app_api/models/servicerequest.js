const mongoose = require('mongoose');

const serviceRequest = new mongoose.Schema({
    Category: {
        type: String,
        required: true
    },
      dateNeeded: {
        type: Date,
        'default': Date.now
      },
      timeNeeded: {
          type: Number,
          required: true
      },
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
    VolunteerID: {
        type: String
    }
    
    });

    mongoose.model('serviceRequest',serviceRequest);