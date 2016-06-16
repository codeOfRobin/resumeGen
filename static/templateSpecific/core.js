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

var elems = $('.name, .email, .phone, .schoolname, .degree, .bullet, .companyname, .location, .companydescription, .designation')
$.each(elems,function(index, value)
{
    var model = value.getAttribute('ng-model')
    value.setAttribute('data-tooltip', _.get(toolTip,model))
    value.setAttribute('data-tooltip-position', "left top")
})
