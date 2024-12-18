const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User schema definition
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  medications: String,
  allergies: String,
  height: String,
  weight: String,
  age: String,
  emergencyContacts: [
    {
      name: String,
      phone: String,
      email: String
    }
  ],
  qrCode: String  // Store QR code data as a string (to be generated later)
});

const User = mongoose.model('User', userSchema);
module.exports = User;
