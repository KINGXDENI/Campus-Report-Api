import bcrypt from 'bcrypt';
import User from '../models/UserModel.js';

const UserController = {
  login: async (req, res, next) => {
    try {
      const {
        email,
        nim,
        password
      } = req.body;
      let user;

      if (email) {
        user = await User.findOne({
          email: email
        });
      } else if (nim) {
        user = await User.findOne({
          nim: nim
        });
      } else {
        return res.status(400).json({
          message: 'Please provide email or NIM'
        });
      }

      if (!user) {
        return res.status(401).json({
          message: 'Invalid credentials'
        });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({
          message: 'Invalid credentials'
        });
      }

      if (user.role === 'admin') {
        return res.status(200).json({
          id: user.id,
          role: 'admin',
          message: 'Admin login successful',
        });
      } else {
        return res.status(200).json({
          id: user.id,
          role: 'user',
          message: 'User login successful',
        });
      }
    } catch (error) {
      console.error('Error during login:', error);
      return res.status(500).json({
        message: 'Internal server error'
      });
    }
  },

  register: async (req, res, next) => {
    try {
      const {
        name,
        email
      } = req.body;

      const existingUser = await User.findOne({
        email: email
      });
      if (existingUser) {
        return res.status(400).json({
          message: 'Email is already registered'
        });
      }

      const newUser = await User.create({
        name,
        email
      });

      if (newUser) {
        return res.status(201).json({
          message: 'User successfully registered'
        });
      } else {
        return res.status(500).json({
          message: 'Failed to register user'
        });
      }
    } catch (error) {
      console.error('Error during registration:', error);
      return res.status(500).json({
        message: 'Internal server error'
      });
    }
  },

  getUser: async (req, res, next) => {
    const {
      id
    } = req.params;
    try {
      const user = await User.findById(id);

      if (!user) {
        res.status(404);
        return next(new Error('User not found'));
      }

      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      console.log(error);
      return next(error);
    }
  },
};

export default UserController;
