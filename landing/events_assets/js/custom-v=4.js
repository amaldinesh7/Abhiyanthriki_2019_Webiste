$('body').on('click', '#btn-edge-1', function(){
  var vote = $.getPercentage();
  var voteNormalized = normalizePercentage(vote, 792);
  //console.log(voteNormalized);
  ajaxSubmitVote(voteNormalized, 1);
});

$('body').on('mouseup', '.twentytwenty-handle', function(){
  $('.slider-headline').addClass('no-opacity');
  $('.percent-left').addClass("no-opacity");
  $('.percent-right').addClass("no-opacity");
  setTimeout(function(){
    $('.slider-headline').removeClass('no-opacity');
  }, 1000);
});

var tilt = $('.speaker-image').tilt({
    glare: true,
    maxGlare: .3
})

$('body').on('touchend', '.twentytwenty-handle', function(){
  $(this).trigger('mouseup');
});

$('.event').on('click', function(){
  if($(this).find('.session-info').hasClass('expanded')){
    $(this).find('.session-info').slideUp();
    $(this).find('.session-info').removeClass('expanded');
  } else {
    $(this).find('.session-info').slideDown();
    $(this).find('.session-info').addClass('expanded');
  }
});

$('.event a').on('click', function(e){
  e.stopPropagation();
});
function normalizePercentage(vote, width){
  var x1 = (1140-width)/2;
  var x2 = 1140-x1;
  var bigPostion = 1140*vote;
  var smallPosition = bigPostion-x1;
  var newPercent = smallPosition / width;
  if(newPercent > 1) newPercent = 1.0;
  if(newPercent < 0) newPercent = 0.0;
  return newPercent;
}

function denormalizePercentage(vote, width){
  var x1 = (1140-width)/2;
  var x2 = 1140-x1;
  
  var smallPosition = vote * width;
  var bigPosition = smallPosition + x1;
  
  var newPercent = bigPosition / 1140;
  
  return newPercent;
}
function countUp(){
  $('.count').each(function() {
    var $this = $(this),
    countTo = $this.data('count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    }, {
      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
    });  
  });
  
}

// Start Slider Animation
$(window).load(function(){
  $(".edge").twentytwenty({default_offset_pct: -0.5, no_overlay: true});
  $('.slider-wrapper').removeClass('loading');
  
  setTimeout(function(){ 
    $.startAnimation();
  }, 1500);
});

// Mailchimp Signup
$('#newsletterForm').submit(function(event) {
  event.preventDefault();
  var url = $(this).attr('action');
  var datos = $(this).serialize();
  $.get(url, datos, function(resultado) {
    $('#result-newsletter').html(resultado);
  });
});

// Sticky Header
$(window).scroll(function() {
    if ($(window).scrollTop() > 350) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});


$('.down-info a').click(function(event) {
    scrollTo($(this));
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    scrollTo($(this));
});

function scrollTo(elem){
  var id = elem.attr("href");
  var offset = 53;
  var target = $(id).offset().top - offset;
  $('html, body').animate({
      scrollTop: target
  }, 500);
  event.preventDefault();
}