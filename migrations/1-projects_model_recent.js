'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "aboutMe", deps: []
 * createTable "projects", deps: []
 * addIndex "PRIMARY" to table "aboutMe"
 * addIndex "PRIMARY" to table "projects"
 *
 **/

var info = {
    "revision": 1,
    "name": "projects_model_recent",
    "created": "2023-02-01T17:17:53.331Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "aboutMe",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "projects",
            {

            },
            {}
        ]
    },
    {
        fn: "addIndex",
        params: [
            "aboutMe",
            [{
                "name": "id"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "projects",
            [{
                "name": "id"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
