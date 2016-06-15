var elems = $('.name, .email, .phone, .schoolname, .degree, .bullet, .companyname, .location, .companydescription, .designation')
$.each(elems,function(index, value)
{
    var model = value.getAttribute('ng-model')
    value.setAttribute('data-tooltip', model)
    value.setAttribute('data-tooltip-position', "left top")
})
