function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

$(function() {
  $(shuffle($('.plant-background')).first()).addClass('true');
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