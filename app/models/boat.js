import {DataTypes} from 'sequelize';
import db from '../config';

const Boat = db.define('boat', {
    Id_Boat: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Name_Boat: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    License_Boat: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Slot_Boat: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Description_Boat: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Price_Boat: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    IsRented_Boat: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    IsPermis_Boat: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    IsRepared_Boat: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    Id_BoatType: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: BoatType,
            key: 'Id_BoatType'
        }
    },
    NbrRented_Boat: {
        type: DataTypes.INTEGER
    },
});

export default Boat;