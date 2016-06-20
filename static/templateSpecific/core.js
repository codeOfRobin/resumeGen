Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};
for (var educationPoint of resumeDataOld.education)
{
    educationPoint.bullets = educationPoint.bullets.map(function(bullet){
        return {"text":bullet}
    })
}
for (var experiencePoint of resumeDataOld.experience)
{
    experiencePoint.bullets = experiencePoint.bullets.map(function(bullet){
        return {"text":bullet}
    })
}
function checkEmail(emailDomain)
{
    var search = new RegExp('^[A-Za-z0-9._%+-]+@' + emailDomain + '$');
    if(!search.test(resumeDataOld.personalInformation.email))
    {
        swal({
            title: "Wrong email domain",
            text: "Please use your " + emailDomain + " email",
            imageUrl: "./static/caution.png"
        });
        $(".email").css("background-color","#DD6B55")
    }
}




var toolTip = {
    "resumeData.personalInformation.name" : "Your Name",
    "resumeData.personalInformation.address" : "Your Address",
    "resumeData.personalInformation.phone" : "Your Contact Number",
    "resumeData.personalInformation.email" : "Your University Email Address",
    "educationPoint.schoolname" : "Name of School/College/University",
    "educationPoint.location" : "Location of School/College/University",
    "educationPoint.degree" : "Degree",
    "educationPoint.endyear" : "Year of Completion",
    "bullet.text" : "These are the bullets under the Education Section",
    "experiencePoint.companyname" : "Organization Name",
    "experiencePoint.location" : "Organization Location",
    "experiencePoint.position" : "Your Designation",
    "experiencePoint.data_raw" : "Experience Tenure (January 2001 - June 2005)",
    "bullet.text" : "These are the bullets under Experience Section"
}

var app = angular.module("resumeEditApp", []).controller('mainCtrl',function ($scope)
{
    $scope.resumeData = resumeDataOld
    $scope.addBullet = function(point)
    {
        var bullet = {text: "Insert a Bullet"}
        point.bullets.push(bullet)
    }
    $scope.addEducationPoint = function()
    {
        var point = {}
        point.date_raw = "2015-2016"
        point.schoolname = "University Name"
        point.degree = "Degree"
        point.bullets = [{text:"Insert a Bullet"}]
        point.location = "Location"
        point.startyear = 2015
        point.endyear = 2016
        $scope.resumeData.education.push(point)
    }
    $scope.addExperiencePoint = function()
    {
        var point = {}
        point.data_raw = "Jun 2015 to May 2016"
        point.companyname = "Company Name"
        point.position = "Designation"
        point.industry = "Company Industry"
        point.location = "Company Location"
        point.bullets = [{text:"Insert a Bullet"}]
        point.startyear = 2015
        point.endyear = 2016
        $scope.resumeData.experience.push(point)
    }
    $scope.deleteBullet = function(index,point)
    {
        point.bullets.remove(index)
    }
})
app.directive("contenteditable", function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {

            function read()
            {
                var model = element[0].getAttribute('ng-model')
                if(model == "resumeData.personalInformation.email")
                {
                    var search = new RegExp('^[A-Za-z0-9._%+-]+@' + emailDomain + '$');
                    if(search.test(element.text()))
                    {
                        $(".email").css("background-color",$(".email").parent().parent().css("background-color"))
                    }
                    else
                    {
                        $(".email").css("background-color","#DD6B55")
                    }
                }
                ngModel.$setViewValue(element.text());
            }

            ngModel.$render = function()
            {
                element.html(ngModel.$viewValue);
            };

            element.bind("blur change", function()
            {
                scope.$apply(read);
            });
        }
    };
});
var elems = $('.name, .email, .phone, .schoolname, .degree, .companyname, .location, .companydescription, .designation')
$.each(elems,function(index, value)
{
    var model = value.getAttribute('ng-model')
    value.setAttribute('data-tooltip', _.get(toolTip,model))
    value.setAttribute('data-tooltip-position', "bottom left")
})


function logOutJSON()
{
    var forJSONStuff = $('.name, h1, .email,.date, .phone,.address, .schoolname, .degree, .bullet, .companyname, .location, .companydescription, .designation, .bullet')
    var divArray = []
    $.each(forJSONStuff,function(index, value)
    {
        var divDict = {}
        divDict["div_id"] = index
        divDict["page"] = 1
        divDict["text"] = $(value).text()
        divDict["model"] = $(value).attr('ng-model')
        divArray.push(divDict)
    })
    console.log(JSON.stringify(divArray))
}

setTimeout(logOutJSON,4000)

