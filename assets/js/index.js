$(function(){
  $('.images-grid .image.thumb').on('click', '.inner', function(e){
    $el = $(e.delegateTarget)
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