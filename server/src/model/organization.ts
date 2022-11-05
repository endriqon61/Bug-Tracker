import mongoose from 'mongoose';
const { Schema } = mongoose;

const organizationSchema = new Schema({
  name: String,
  email: String,
  password: {
    type: String
  },
  members: {
    type: [mongoose.Types.ObjectId],
  },
  tickets: {
    type: [mongoose.Types.ObjectId],
  }, 
});

export const Organization = mongoose.model('Organization', organizationSchema)