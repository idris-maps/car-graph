const fs = require('fs')
const sixMonths = 1000 * 60 * 60 * 24 * 31 * 6

const periods = 20

const timestamp = {
  prev: Date.now() - periods * sixMonths,
  new: prev => prev + sixMonths,
}

const mileage = {
  prev: 0,
  new: prev => prev + Math.floor(Math.random() * 10000),
}

const data = []

for (i = 0; i < periods; i++) {
  const newTimestamp = timestamp.new(timestamp.prev)
  const newMileage = mileage.new(mileage.prev)
  data.push({
    timestamp: newTimestamp,
    mileage: newMileage,
  })
  timestamp.prev = newTimestamp
  mileage.prev = newMileage
}

fs.writeFileSync('data.json', JSON.stringify(data), 'utf-8')
