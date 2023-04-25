import {DataTypes} from 'sequelize';
import db from '../config';

const Command = db.define('command', {
    Id_Command: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    DateStart_Command: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    DateEnd_Command: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    HasPaiedDeposit_Command: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
});

export default Command