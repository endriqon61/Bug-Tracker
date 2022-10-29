import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: String,
  email: String,
  password: {
    type: String
  },
  organizations: {
    type: [mongoose.Types.ObjectId],
  },
  tickets: {
    type: [mongoose.Types.ObjectId],
  }, 
});

export const User = mongoose.model('User', userSchema)