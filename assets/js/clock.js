$(document).ready(function() {
  var clocks, drawClock, drawClocks, drawFace, drawHand, drawNumbers, drawTime, getRandomInt, numClocks, offset, start;
  drawClock = function(ctx, radius, factor, start) {
    drawFace(ctx, radius, factor);
    drawNumbers(ctx, radius);
    return drawTime(ctx, radius, factor, start);
  };
  drawFace = function(ctx, radius, factor) {
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = factor === 1.0 ? 'white' : '#5e54e2';
    ctx.fill();
    return ctx.lineWidth = radius * 0.1;
  };
  drawNumbers = function(ctx, radius) {
    ctx.fillStyle = 'black';
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    return _.times(12, function(num) {
      var ang;
      num += 1;
      ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius * 0.85);
      return ctx.rotate(-ang);
    });
  };
  drawTime = function(ctx, radius, factor, start) {
    var adjustedNow, elapsed, hour, minute, second;
    elapsed = moment().diff(start);
    adjustedNow = moment(start).add(elapsed * factor, 'milliseconds');
    hour = adjustedNow.hours() % 12;
    minute = adjustedNow.minutes();
    second = adjustedNow.seconds();
    hour = hour * Math.PI / 6;
    drawHand(ctx, hour, radius * 0.5, radius * 0.07);
    minute = minute * Math.PI / 30;
    drawHand(ctx, minute, radius * 0.8, radius * 0.07);
    second = second * Math.PI / 30;
    return drawHand(ctx, second, radius * 0.9, radius * 0.02);
  };
  drawHand = function(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    return ctx.rotate(-pos);
  };
  drawClocks = function(clocks) {
    _.each(clocks, function(arg) {
      var ctx, factor, radius;
      ctx = arg.ctx, radius = arg.radius, factor = arg.factor;
      return drawClock(ctx, radius, factor, start);
    });
    return _.defer(function() {
      return window.requestAnimationFrame(function() {
        return drawClocks(clocks);
      });
    });
  };
  getRandomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  start = moment();
  numClocks = 60;
  offset = getRandomInt(-29, 30);
  clocks = _.times(numClocks, function(i) {
    var $el, canvas, ctx, factor, radius;
    i += offset;
    $el = $('<div class=container><canvas width="400px" height="400px"></canvas></div>');
    $('body').append($el);
    canvas = $el.find('canvas')[0];
    factor = ((numClocks / 16) + (60 - i / 8)) / 60;
    ctx = canvas.getContext("2d");
    ctx.webkitImageSmoothingEnabled = true;
    ctx.imageSmoothingEnabled = true;
    radius = canvas.height / 2;
    ctx.translate(radius, radius);
    return {
      ctx: ctx,
      radius: radius,
      factor: factor
    };
  });
  return drawClocks(clocks);
});
