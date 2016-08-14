$(document).ready(function () {
  $('#search').on('submit', function(e) {
    e.preventDefault(e);
    var name = $('#search-name').val();

    $.ajax({
      url: 'http://www.strudel.org.uk/lookUP/json/?name='+name,
      dataType: "jsonp",
      jsonpCallback: "results"
    })
    .done(function(data) {
      console.log(data);
    })
    .fail(function() {
      alert('error');
    })


})
})


function results(json){
  if (json.image) {
    $('#preview').html('<img src="http:' + json.image.src + '">')
} else {
  alert("Star not found")
}
}
