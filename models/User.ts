import mongoose from "mongoose";

const EmergencyContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, match: /^[0-9]{10}$/ },
  email: { type: String, required: true, match: /.+\@.+\..+/ },
});

const QuestionnaireSchema = new mongoose.Schema({
  medications: { type: String, default: "" },
  allergies: { type: String, default: "" },
  height: { type: String, default: "" },
  weight: { type: String, default: "" },
  age: { type: Number, min: 0, max: 120 },
  emergencyContacts: [EmergencyContactSchema],
});

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  password: { type: String, required: true },
  questionnaire: { type: QuestionnaireSchema, default: {} },
  hasCompletedQuestionnaire: { type: Boolean, default: false }, // New field
});

// Middleware to hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const bcrypt = await import("bcrypt");
  this.password = await bcrypt.hash(this.password, 10); // Hash password with salt rounds
  next();
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
