
import mongoose from 'mongoose';
const { Schema } = mongoose;

const ticketSchema = new Schema({
  name: String,
  status: String,
  description: String,
  priority: String,
  organization: mongoose.Types.ObjectId,
  project: mongoose.Types.ObjectId,
  members: {
    type: [mongoose.Types.ObjectId],
  },
});

export const Ticket = mongoose.model('Ticket', ticketSchema)