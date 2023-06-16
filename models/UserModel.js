import mongoose from 'mongoose';

const {
  Schema
} = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
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

const User = mongoose.model('User', UserSchema);

export default User;