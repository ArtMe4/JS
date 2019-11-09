$(".btn-first").on("click", function(){
  $(".btn-first").css({
    "background": "silver",
    "border": "2px solid #747474",
    "color": "#000"
  });
  var sec = 0;
  $('.btn-first').text(sec + " секунд");
  setInterval(function() {
  if (sec < 11) {
    sec++;
    if (sec == 1)
      {$('.btn-first').text(sec + " секунда");}
    else if (sec > 1 && sec < 5)
      {$('.btn-first').text(sec + " секунды");}
    else if (sec == 5)
      {$('.btn-first').text(sec + " секунд");}
    else if (sec == 6)
      {$('.btn-first').text("Готово");}
    else if (sec == 7)
      {$('.btn-first').css({
        "animation": "marg 3s linear forwards",
        "position": "static"
      });}
    else if (sec == 10) {
      $('.timer').css({
        "display": "block"
      });
      $('.btn-first').css({
        "background": "#AF2F00",
        "color": "#fff",
        "border": "2px solid #D93B00"
      });
      setInterval(function() {
        if (sec < 50) {
          sec++;
          $('.timer').text(sec);
        }
      }, 60);
    }
  }
  }, 1000);
  setInterval(function() {
    $('.wind').css({
      "display": "block",
      "background": "#fff"
    });
    $('#end').css({
      "height": "100%",
      "width": "100%",
      "top": "0",
      "left": "0",
      "position": "fixed",
      "opacity": "0.5",
      "background-color": "silver",
      "z-index": "10"
    });
  }, 12500);
});

$('#clear').on("click", function() {
  $('html').remove();
});
