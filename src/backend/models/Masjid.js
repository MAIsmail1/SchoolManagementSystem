// src/models/Masjid.js
const mongoose = require('mongoose');

const MasjidSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String
  },
  contactInfo: {
    phone: String,
    email: String
  },
  administrators: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  classes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class'
  }],
  programs: [{
    name: String,
    description: String
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Masjid', MasjidSchema);