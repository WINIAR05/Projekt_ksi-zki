function sendData(formId) {
  var form = document.getElementById(formId);
  var formData = new FormData(form);

  formData.append("id", "bm7wj21");

  $.ajax({
    url: 'http://imiki.pl/projekt',
    type: 'POST',
    data: formData,
    processData: false,
    contentType: false,
    success: function(response) {
      console.log(response);
    },
    error: function(error) {
      console.log(error);
    }
  });
}
