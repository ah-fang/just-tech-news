const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

//define table columns and configuration
User.init(
    {
        //table columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            //no duplicate email values allowed
            unique: true,
            //if allownull = false, we can run our data through validators before creating the table data
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //define minimum character length
                len: [4] 
            }
        }
    },
    {
        // table config options
        // pass in imported sequelize connection (direct connection to database)
        sequelize,
        // don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel casing 
        underscored: true,
        // make it so the model name stays lowercase in the database
        modelName: 'user'
    }
);

module.exports = User;