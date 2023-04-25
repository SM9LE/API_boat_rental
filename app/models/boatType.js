import {DataTypes} from 'sequelize';
import db from '../config';

const BoatType = db.define('boatType', {
    Id_BoatType: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Type_BoatType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default BoatType