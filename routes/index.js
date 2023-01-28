var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var models = require('../models'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/projects', function(req, res, next){
  models.projects.findAll({}).then(projectsFound => {
    res.json(projectsFound);
    //res.render('projects', {projects: projectsFound})
    
    //res.json(projectsFound);
  });
});

/* router.get('/recentProjects', function(req, res, next) {
  models.projects.findOne({id:0}).then(projectsFound => {
    console.log(projectsFound);
    res.json(projectsFound);
  })
}) */
module.exports = router;
