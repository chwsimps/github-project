var url = 'https://api.github.com/users/chwsimps';
var org_url = 'https://api.github.com/users/chwsimps/orgs';
var star_url = 'https://api.github.com/users/chwsimps/starred';
var repo_url = 'https://api.github.com/users/chwsimps/repos';

//Footer ====================================
var temp4 = $('#av-me').html();
var rendered4 = _.template(temp4);

//Image & Name ==============================
var temp1 = $('#user-box').html();
var rendered1 = _.template(temp1);

//Location,Email,& Join Info ================
var temp2 = $('#user-info').html();
var rendered2 = _.template(temp2);

//Followers =================================
var temp3 = $('#follow1').html();
var rendered3 = _.template(temp3);

var temp5 = $('#follow2').html();
var rendered5 = _.template(temp5);

var temp6 = $('#follow3').html();
var rendered6 = _.template(temp6);

//ORG =======================================

var temp7 = $('#org-area').html();
var rendered7 = _.template(temp7);

//REPO ======================================

var temp8 = $('#repo-area').html();
var rendered8 = _.template(temp8);

//JSON ======================================

$.getJSON(url).done( function (user_info) {

  $('.av-me').append(rendered4(user_info));

$('.user-box').append(rendered1(user_info));
  $('.user-info').append(rendered2(user_info));

  $('.follow1').append(rendered3(user_info));

  $('.follow3').append(rendered6(user_info));

});


$.getJSON(org_url).done( function (user_info) {
    $('.org-area').append(rendered7(user_info));

});


$.getJSON(star_url).done( function (user_info) {

  user_info.forEach( function(x) {
    $('.follow2').append(rendered5(x));

  });
});


$.getJSON(repo_url).done( function (user_info) {

  user_info.forEach( function(x) {
    $('.repo-area').append(rendered8(x));

  });
});


//Pop Up Messages ===========================

$('.triangle').hover(function(){
   var img = $(this).find('.popup1').attr('href');
   $(img).fadeIn();
});
