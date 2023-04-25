import {DataTypes} from 'sequelize';
import db from '../config';

const Customer = db.define('customer', {
    Id_Customer: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    FirstName_Customer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    LastName_Customer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Age_Customer: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    Mail_Customer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    BoatLicense_Customer: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    HasRented_Customer: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
});

export default Customer