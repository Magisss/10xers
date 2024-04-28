'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Phone.init({
    brand: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg : "Brand must not be null"
        },
        notEmpty: {
          msg : "Brand must not be empty"
        }
      }
    },
    model: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg : "Model must not be null"
        },
        notEmpty: {
          msg : "Model must not be empty"
        }
      }
    },
    storage: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg : "Storage must not be null"
        },
        notEmpty: {
          msg : "Storage must not be empty"
        }
      }
    },
    color: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg : "Color must not be null"
        },
        notEmpty: {
          msg : "Color must not be empty"
        }
      }
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg : "Price must not be null"
        },
        notEmpty: {
          msg : "Price must not be empty"
        }
      }
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg : "Quantity must not be null"
        },
        notEmpty: {
          msg : "Quantity must not be empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Phone',
  });
  return Phone;
};