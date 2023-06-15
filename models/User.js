import Sequelize from 'sequelize';
import db from '../config/Database.js';

const User = db.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default User;
