const mongoose = require('mongoose');
const questSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    courriel: {
      type: String,
      required: true,
    },
    question: {
        type: String,
        required: true,
      },
  }, { timestamps: true });
  
  const Question = mongoose.model('Question', questSchema);
  


module.exports = Question;