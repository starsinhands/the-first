jQuery.get('/path/to/file', {paraml: 'value1'}, function (data, textStatus, xhr) {
    //optional stuff to do after success
});
$.ajax({
    url: '/path/to/file',
    type: 'default GET (Other values: POST)',
    dataType: 'default:Intelligent Guess (Other values: xml, json, script, or html)',
    data: {paraml: 'value1'},
})
.done(function() {
    console.log("success");
})
.fail(function() {
    console.log("error");
})
.always(function() {
    console.log("complete");
})