console.log(encodeURIComponent('\uD800\uDFFF'));


$("button").click(function()
{
    console.log("button clicked");
    var newURL = "/resume?resumeID=" + encodeURIComponent($("#resumeID").val())+"&template=" + encodeURIComponent($("#template").val())
    window.location.href = newURL
})
