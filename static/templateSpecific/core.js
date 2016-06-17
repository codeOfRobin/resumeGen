var elems = $('.name, .email, .phone, .schoolname, .degree, .bullet, .companyname, .location, .companydescription, .designation')
$.each(elems,function(index, value)
{
    var model = value.getAttribute('ng-model')
    value.setAttribute('data-tooltip', _.get(toolTip,model))
    value.setAttribute('data-tooltip-position', "bottom left")
})
