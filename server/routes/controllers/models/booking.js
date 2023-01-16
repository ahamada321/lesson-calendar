const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  startAt: { type: Date, required: "Starting date is required" },
  oldStartAt: Date,
  // courseType: { type: String, required: "Course type is required" },
  // courseTime: { type: Number },
  courseTime: { type: Number, required: "Course time is required" },
  perMonth: { type: Number },
  // place: { type: String, required: "Place is required" },
  memo: String,

  student: { type: Schema.Types.ObjectId, ref: "User" }, // Patient
  teacher: { type: Schema.Types.ObjectId, ref: "Rental" }, // Room
  status: { type: String, default: "pending" },
  // review: { type: Schema.Types.ObjectId, ref: "Review" },
});

module.exports = mongoose.model("Booking", bookingSchema);
