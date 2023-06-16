import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  nama: {
    type: String,
  },
  nim: {
    type: String,
  },
  jurusan: {
    type: String,
  },
  fakultas: {
    type: String,
  },
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;
