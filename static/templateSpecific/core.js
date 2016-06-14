var editable = new Editable()
$('h1,li,.name,.email,.phone,.schoolname,.degree,.company,.location,.companydescription,.designation,.text').each(function(index)
{
    editable.add($(this))
    // var popper = new Popper($(this),
    //     {
    //         content: $(this).attr('ng-model')
    //     },
    //     {
    //     placement: 'left',
    //     boundariesElement: $(this)
    // });
});

editable.on('change', elem => {
    const currentContent = editable.getContent(elem);
    var scope = angular.element($("body")).scope();
    var ul = $(elem).parent().attr('scopeVal')
    var li = $(elem)
    scope.$apply(function(){
        var path = ($(elem).attr("scopeVal"))
        _.set(scope,"resumeData." + path.split(' ').join('.'),editable.getContent(elem));
    })
})
.on('blur', elem => {
  // your code...
  const currentContent = editable.getContent(elem);
  var scope = angular.element($("body")).scope();
  var path = ($(elem).attr("scopeVal"))
  var ul = $(elem).parent().attr('scopeVal')
  scope.$apply(function(){

      if(path.substring(0,7) == "bullets")
      {
          _.set(scope,ul.split(' ').join('.') +  path.split(' ').join('.'),editable.getContent(elem));
      }
  })
})
