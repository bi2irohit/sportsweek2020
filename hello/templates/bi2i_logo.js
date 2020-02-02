
logo_w = Math.floor($('#bi2i_logo_div').width());
logo_h = Math.floor($('#bi2i_logo_div').height());
rect1_color = '#30BAB2';
rect2_color = '#98C93C';
rect3_color = '#379344';

rect1_w = Math.floor(0.25*logo_w);
rect2_w = Math.floor(0.35*logo_w);
rect3_w = Math.floor(0.40*logo_w);

d3.select('#bi2i_logo_div')
  .append('svg')
  .attr('id', 'bi2i_svg_logo')
  .attr('width', logo_w)
  .attr('height', logo_h)
  .attr('display', 'block')
  .append('rect')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width',  rect1_w)
  .attr('height', logo_h)
  .attr('fill', rect1_color);

d3.select('#bi2i_svg_logo')
  .append('rect')
  .attr('x', 0+rect1_w)
  .attr('y', 0)
  .attr('width',  rect2_w)
  .attr('height', logo_h)
  .attr('fill', rect2_color);

d3.select('#bi2i_svg_logo')
  .append('rect')
  .attr('x', 0+rect1_w+rect2_w)
  .attr('y', 0)
  .attr('width',  rect3_w)
  .attr('height', logo_h)
  .attr('fill', rect3_color);


// d3.select('#bi2i_logo_div')
//   .append('svg')
//   .attr('width', function (d){
//     console.log(Math.floor($('#bi2i_logo_div').width()));
//     return Math.floor($('#bi2i_logo_div').width());
//   })
//   .attr('height', Math.floor($('#bi2i_logo_div').height()))
//   .append('rect')
//   .attr('x', 0)
//   .attr('y', 0)
//   .attr('width',  function (d){
//     console.log(Math.floor($('#bi2i_logo_div').width()));
//     return Math.floor($('#bi2i_logo_div').width());
//   })
//   .attr('height', Math.floor($('#bi2i_logo_div').height()))
//   .attr('fill', 'red');
