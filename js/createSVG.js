/*
    name:ghost
    qq:200581882
    time:2016-3-27
    version:1.0
 */
var createSVG = function(obj) {
  var num = 0,
    r = 90,
    w = 200,
    t, percent = Math.PI * 2 * r,
    linecap = obj.linecap ? 'round' : 'butt',
    fontWeight = obj.fontWeight ? '700' : '400';

  //createElement
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  var elem = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  var elemBg = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  var numTspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
  var percentTspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');

  text.appendChild(numTspan);
  percentTspan.textContent = '%';
  text.appendChild(percentTspan);
  if (obj.bgEle) {
    svg.appendChild(elemBg);
  }
  svg.appendChild(elem);
  svg.appendChild(text);
  try {
    obj.id.appendChild(svg);
  } catch (e) {}

  //svg-style
  svg.setAttribute('viewBox', '0 0 ' + w + ' ' + w);

  //tspan-style
  numTspan.setAttribute('font-size', obj.fontSize || '70');

  numTspan.setAttribute('font-weight', fontWeight);

  //text-style
  text.setAttribute('text-anchor', 'middle');
  text.setAttribute('font-size', obj.fontSize / 4 || '20');
  text.setAttribute('x', w / 2);
  text.setAttribute('y', '130');
  text.setAttribute('fill', obj.fontColor || '#000');

  //elem-style
  var elemStyle = function(el) {
    el.setAttribute('r', r);
    el.setAttribute('cx', w / 2);
    el.setAttribute('cy', w / 2);
    el.setAttribute('fill', 'none');
    el.setAttribute('stroke-width', obj.borderWidth || '10');
  };
  elemStyle(elemBg);
  elemStyle(elem);

  elemBg.setAttribute('stroke', obj.bgColor || 'none');
  elemBg.setAttribute('fill', obj.bgFill || 'none');

  elem.setAttribute('stroke-dasharray', '0 ' + percent);
  elem.setAttribute('transform', 'translate(0,' + w + ') rotate(-90)');
  elem.setAttribute('stroke-linecap', linecap);
  elem.setAttribute('stroke', obj.borderColor || '#000');

  //
  t = setInterval(function() {
    var value = num / 100 * percent;
    elem.setAttribute('stroke-dasharray', value + ' ' + percent);
    if (num >= obj.num) {
      clearInterval(t);
    }
    numTspan.textContent = num++;
  }, 10);

};