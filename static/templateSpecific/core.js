$('h1,li,.name,.email,.phone,.schoolname,.degree,.company,.location,.companydescription,.designation,.text').map(function(elem)
{
    var popper = new Popper(elem,
        {
            content: $(elem).attr('ng-model')
        },
        {
        placement: 'left',
        boundariesElement: $(this)
    });
});

function genPoppers(element, index, array)
{
    var p
    if (index%2 == 0)
    {
        p = "left"
    }
    else {
        p = "right"
    }
    var popper = new Popper($(element),
        {
            content: $(element).attr('ng-model')
        },
        {
        placement: p,
        boundariesElement: $(element)
    });
}

// Notice that index 2 is skipped since there is no item at
// that position in the array.
[2, 5, , 9].forEach(logArrayElements);
