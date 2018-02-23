const scale = require('d3-scale')
const array = require('d3-array')
const shape = require('d3-shape')
const el = require('d3-selection')

//const data = require('./data.json')

const yAxis = require('./yAxis')
const xAxis = require('./xAxis')
const icons = require('./icons')

const width = 300
const height = 120
const margin = 10

const getXScale = (data, key) =>
  scale.scaleLinear()
    .range([margin, width-margin])
    .domain(array.extent(data.map(d => d[key])))

const getYScale = (data, key) =>
  scale.scaleLinear()
    .range([height-margin, margin])
    .domain(array.extent(data.map(d => d[key])))

const graph = (id, data, xKey, yKey, style) => {
  const svg = el.select(`#${id}`).append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`)

  const kmData = data.filter(d => d[xKey] && d[yKey])
  const xScale = getXScale(data, xKey)
  const yScale = getYScale(data, yKey)
  const line = shape.line()
    .curve(shape.curveBasis)
    .x(d => xScale(d[xKey]))
    .y(d => yScale(d[yKey]))
  const pathD = `${line(data)}L${width-margin},${height-margin}`

  yAxis(svg, yScale, width, margin, style.color.axis)
  svg.append('path')
    .attr('d', pathD)
    .attr('fill', style.color.graph)
  xAxis(svg, xScale, height, margin, style.color.axis)
  icons(svg, data, xScale, xKey, 100, style)
}

window.graph = graph
/*
graph('graph', data, 'timestamp', 'mileage', {
  color: {
    graph: 'lightblue',
    serviceIconBg: 'yellow',
    serviceIcon: 'gray',
    approvedIconBg: 'lightgreen',
    approvedIcon: 'white',
    axis: 'purple',
  },
})
*/