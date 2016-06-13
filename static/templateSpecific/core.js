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
    scope.$apply(function(){
        var path = "resumeData."+($(elem).attr("ng-model"))
        scope[path] = editable.getContent(elem);
        console.log(path + " has been updated to " + scope[path]);
    })
})
