$(function(){
  $('.images-grid .image.thumb').click(function(e){
    $el = $(e.currentTarget)
    expanded = $el.hasClass('expanded');
    if (!expanded) {
      e.preventDefault();
    }
    if(expanded){
      $el.removeClass('expanded');
    } else {
      $('.images-grid .image.expanded').removeClass('expanded');
      $el.addClass('expanded');
    }
  })
})