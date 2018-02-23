const time = require('d3-time-format')
const ax = require('d3-axis')

const parseTime = time.timeFormat('%m-%Y')

module.exports = (svg, xScale, height, margin, color) => {
  const axis = ax.axisBottom(xScale)
    .tickSize(margin/4)
    .tickFormat(parseTime)

  const g = svg.append('g')
    .attr('stroke-width', 0.1)
    .attr('transform', `translate(0,${height-margin})`)
    .call(axis)

  g.select('path').remove()

  g.selectAll('text')
    .attr('font-size', 2)
    .attr('transform', 'translate(0,-2)')
    .attr('fill', color)

  g.selectAll('line')
    .attr('stroke', 'black')
    .attr('stroke', color)
}