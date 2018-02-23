const ax = require('d3-axis')

module.exports = (svg, yScale, width, margin, color) => {

  const axis = ax.axisRight(yScale).tickSize(width-2*margin)

  const g = svg.append('g')
    .attr('stroke-width', 0.1)
    .attr('transform', `translate(${margin})`)
    .call(axis)

  g.select('path').remove()

  g.selectAll('text')
    .attr('font-size', 2)
    .attr('x', 0)
    .attr('y', -2)
    .attr('fill', color)

  g.selectAll('line')
    .attr('stroke-dasharray', '0.5 1')
    .attr('stroke', color)

}
