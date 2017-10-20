$(function(){
  $('.images-grid .image.thumb').click(function(e){
    $el = $(e.currentTarget)
    if($el.hasClass('expanded')){
      $el.removeClass('expanded');
    } else {
      $('.images-grid .image.expanded').removeClass('expanded');
      $el.addClass('expanded');
    }
  })
})