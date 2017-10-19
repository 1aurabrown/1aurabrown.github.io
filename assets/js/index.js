$(function(){
  $('.images-grid .image').click(function(e){
    $el = $(e.currentTarget)
    if($el.hasClass('expanded')){
      $el.removeClass('expanded');
    } else {
      $('.images-grid .image.expanded').removeClass('expanded');
      $(e.currentTarget).addClass('expanded');
    }
  })
})