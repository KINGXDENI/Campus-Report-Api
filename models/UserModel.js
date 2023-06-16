import mongoose from 'mongoose';

const {
  Schema
} = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'User name is required'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model('User', UserSchema);
