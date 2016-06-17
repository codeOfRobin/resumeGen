var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');
var async = require('async')
var fs = require('fs')
var request = require('request')
var mba = require("./data/mba_formatted.json")
var ug = require("./data/ug.json")
var unidict = require('./uni2Category.json')
// var utils = require('./utils');

app.set('view engine', 'pug');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views',__dirname + '/templates');
app.use('/static',express.static(__dirname + '/static'))
app.use("/node_modules", express.static(__dirname + "/node_modules"));
// app.use('/', utils.basicAuth('testUser', 'testPass'));


app.get('/login', function(req,res)
{
    res.render('login.jade')
})

app.get('/',function(req,res)
{
    console.log(unidict.keys);
    res.render('home.jade',{
        params:{
            communities: Object.keys(unidict),
            resumeIDs: mba.map(function(resume){return resume.bulk_upload_resume_id}),
            templates : ['ChicagoBooth', 'StGallen', 'Ivey', 'LBS']
        }
    })
})

app.get('/resume',function(req,res)
{
    for (resume of mba)
    {
        if (resume.bulk_upload_resume_id == req.query.resumeID)
        {
            res.render("uniTemplates/"+ req.query.template + "/index.jade", {
                resume: resume.DataStructure.entities
            })
        }
    }
})

app.listen( process.env.PORT || 3000)
console.log("started server");
