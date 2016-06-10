console.log(encodeURIComponent('\uD800\uDFFF'));


$("button").click(function()
{
    console.log("button clicked");
    var newURL = "http://localhost:3000/resume?resumeID=" + encodeURIComponent($("#resumeID").val())+"&community=" + encodeURIComponent($("#community").val())
    window.location.href = newURL
})
