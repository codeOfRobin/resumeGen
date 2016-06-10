var mba = require("./data/mba.json")
var ug = require("./data/ug.json")

console.log(mba.length);
for (var resume of mba)
{
    console.log(resume.DataStructure.entities.personalInformation.phone);
}
