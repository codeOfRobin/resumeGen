var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');
var async = require('async')
var fs = require('fs')
var request = require('request')
var mba = require("./data/mba.json")
var ug = require("./data/ug.json")
var unidict = require('./data/uni2Category.json')

app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views',__dirname + '/templates');
app.use('/static',express.static(__dirname + '/static'))

app.get('/',function(req,res)
{
    console.log(unidict.keys);
    res.render('home.jade',{
        params:{
            communities: Object.keys(unidict),
            resumeIDs: mba.map(function(resume){return resume.bulk_upload_resume_id})
        }
    })
})

app.get('/resume',function(req,res)
{
    res.json({"comm": req.query.community,"resumeID": req.query.resumeID})
})

app.listen(3000)
console.log("started server");
