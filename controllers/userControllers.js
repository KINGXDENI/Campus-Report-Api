import User from '../models/User.js';

export const registerUser = async (req, res) => {
    try {
        const {
            username,
            password
        } = req.body;
        const newUser = await User.create({
            username,
            password
        });
        res.json(newUser);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
};

export const loginUser = async (req, res) => {
    try {
        const {
            username,
            password
        } = req.body;
        const user = await User.findOne({
            where: {
                username,
                password
            }
        });
        if (user) {
            res.json({
                message: 'Login successful'
            });
        } else {
            res.status(401).json({
                error: 'Invalid credentials'
            });
        }
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
};
