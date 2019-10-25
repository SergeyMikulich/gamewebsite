var options = {
  offset: 100
}
var header = new Headhesive('.nav__header',options);
// $(document).ready(function(){

$('.nav-item').on( 'click', function(){
      var el = $(this);
      var dest = el.attr('href'); // получаем направление
      if(dest !== undefined && dest !== '') { // проверяем существование
          $('html').animate({
              scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
          }, 500 // скорость прокрутки
          );
      }
      return false;
  });
  var card = document.getElementsByClassName('card_itm');
  var modal = document.getElementsByClassName('box-modal');
  var btn = document.getElementsByClassName('btn');
  var block = document.getElementsByClassName('block');
  for(let i = 0; i < block.length;i++){
    const b = i;
    $(btn[i]).click(function(){
  $(block[b]).fadeToggle("slow");
   return false;
});
}
    for (let i = 0; i < card.length; i++) {
    const j = i;
    card[i].onclick = function() {
     $(modal[j]).arcticmodal();
     return false;
   };
 };
    // var  logoimg = document.getElementsByClassName('logo__img');
    // logoimg[0].style.background = "url('../figma/imgs/wdlog.png') no-repeat";
    // scroll logoChange
  var  logoimg = document.getElementsByClassName('logo__img');
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll >= 0) {
        logoimg[0].style.background = "url('../figma/imgs/icon50.png') no-repeat";
      }
      if (scroll >= 434) {
        logoimg[0].style.background = "url('../figma/imgs/wdlog.png') no-repeat";

      }
      if (scroll >= 1100) {
       logoimg[0].style.background = "url('../figma/imgs/wrlog.png') no-repeat";

     }
     console.log(scroll);
  });
