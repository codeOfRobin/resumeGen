console.log(encodeURIComponent('\uD800\uDFFF'));


$("button").click(function()
{
    console.log("button clicked");
    var newURL = "http://localhost:3000/resume?resumeID=" + encodeURIComponent($("#resumeID").val())+"&template=" + encodeURIComponent($("#template").val())
    window.location.href = newURL
})
