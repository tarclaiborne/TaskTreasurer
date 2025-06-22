const mongoose = require('mongoose'); 

const UserSchema = new mongoose.Schema({ 
    name: { type: String, required: true }, 
    email: { type: String, required: true, unique: true }, 
    password: { type: String, required: true } 
}, { timestamps: true }); 

const User = mongoose.model('User', UserSchema); 
    plan: {
      type: String,
      enum: ['basic', 'pro'],
      default: 'basic',
},

module.exports = Users