const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aboutMe', {
    id: {
      autoIncrement: true,
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    header: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "0"
    },
    bio: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "0"
    },
    img: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'aboutMe',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
