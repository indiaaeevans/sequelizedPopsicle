// CREATE A SEQUELIZE MODEL
module.exports = function(sequelize, DataTypes) {
  var Popsicle = sequelize.define("Popsicle", {
    pop_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, 
  // options
  {
    timestamps: false
  });
  return Popsicle;
};

