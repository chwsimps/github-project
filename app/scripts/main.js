//Middle Left/User Info ====================
var url = 'https://api.github.com/users/chwsimps?client_id=8e0c016d9fc699395719&client_secret=d1c7213dbdc2d4e37b0a3e819c9ab7f551ee4d5b';
var template = $('.user-img').html();
var rendered = _.template(template);

$.getJSON(url).done( function (user_info) {

  $('.user-box').append(rendered(user_info));

});
