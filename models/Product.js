const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/sequilize");

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(2)
  }
}, {
  timestamps: false
});

module.exports = {
  Product,
}
