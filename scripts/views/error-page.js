$('.error-view').hide();

var errorView = {}

errorView.initErrorPage = (err) => {
  $('.container').hide();
  $('.error-view').show();
  $('#error-message').empty();

  err = {status: 'lousy', statusText: 'not good'};

  const template = Handlebars.compile($('#error-template').text());

  $('#error-message').append(template(err));

}