var DataTypes = require("sequelize").DataTypes;
var _projects = require("./projects");

function initModels(sequelize) {
  var projects = _projects(sequelize, DataTypes);


  return {
    projects,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
