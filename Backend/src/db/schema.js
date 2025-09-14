const mongoose = require('mongoose');

//
// ====== College Schemas ======
//

// Registered Colleges (approved)
const registeredCollegesSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Batches: [{ type: String, required: true }],
}, { timestamps: true });

// Requested Colleges (waiting for approval)
const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneValidator = /^\d{10}$/;

const requestedCollegesSchema = new mongoose.Schema({
  CollegeName: { type: String, required: true },
  Name: { type: String, required: true },
  Email: {
    type: String,
    required: true,
    match: [emailValidator, 'Invalid email address'],
  },
  PhoneNo: {
    type: String,
    required: true,
    match: [phoneValidator, 'Invalid phone number'],
  },
}, { timestamps: true });

//
// ====== User Schemas ======
//

// Professors
const professorsSchema = new mongoose.Schema({
  Username: { type: String, required: true, unique: true },
  Name: { type: String, required: true },
  Password: { type: String, required: true }, // will be hashed
  College: { type: mongoose.Schema.Types.ObjectId, ref: 'RegisteredCollege' }
}, { timestamps: true });

// Students
const studentsSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Batch: { type: String, required: true },
  Year: {
    type: String,
    required: true,
    enum: ['First Year', 'Second Year', 'Third Year', 'Fourth Year'],
  },
  Username: { type: String, required: true, unique: true },
  Password: { type: String, required: true }, // will be hashed
  College: { type: mongoose.Schema.Types.ObjectId, ref: 'RegisteredCollege' }
}, { timestamps: true });

//
// ====== Export Models AND Schemas ======
//
const RegisteredCollege = mongoose.model('RegisteredCollege', registeredCollegesSchema);
const RequestedCollege = mongoose.model('RequestedCollege', requestedCollegesSchema);
const Professor = mongoose.model('Professor', professorsSchema);
const Student = mongoose.model('Student', studentsSchema);

module.exports = {
  RegisteredCollege,
  RequestedCollege,
  Professor,
  Student,
  studentsSchema,      // <-- export schemas
  professorsSchema     // <-- export schemas
};