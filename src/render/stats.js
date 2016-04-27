const Stats = require('stats.js')

const stats = module.exports = new Stats()

stats.setMode(0)
stats.id = 'stats'

stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '10px';
stats.domElement.style.top = '6%';


