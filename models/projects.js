const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projects', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    languages: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    githubUrl: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    demoUrl: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    features: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recent: {
      type: DataTypes.TINYINT,
      defaultValue: true,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'projects',
    timestamps: true,
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
