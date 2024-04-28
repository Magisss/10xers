'use strict';
const { hashPassword } = require('../helpers/bcrypt')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg : "Email must not be null"
        },
        notEmpty: {
          msg : "Email must not be empty"
        }
      }
    },
    password: {
      allowNull: false,
      type:DataTypes.STRING,
      validate: {
        notNull: {
          msg : "Password must not be null"
        },
        notEmpty: {
          msg : "Password must not be empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user, options) => {
    user.password = hashPassword(user.password);
  })
  return User;
};