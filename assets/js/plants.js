$(function() {
  $('.plant-background').click(function(e){
    $el = $(e.currentTarget);
    $el.removeClass('true');
    $next = $el.next('.plant-background');
    if (! $next.length > 0) {
      $next = $($('.plant-background').first());
    }
    $next.addClass('true');
  })
})