import {DataTypes} from 'sequelize';
import db from '../../config/database.js';

const Member = db.define('member', {
    Id_Member: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Login_Member: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Password_Member: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    freezeTableName: true
}
);

export default Member