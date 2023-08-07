import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true
});

export default model('Task', taskSchema);
