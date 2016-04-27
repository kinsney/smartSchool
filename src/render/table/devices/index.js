const THREE = require('three')

const build = require('./device').build
const store = require('../../../store')
const floors = require('../floors')
const utils = require('../../plugins/utils.js')
const devices = module.exports = new THREE.Object3D

devices.name = 'devices'
devices.rotation.y = Math.PI * 45 / 180
store.$watch('devices',(value) =>
{
    if(value)
    {
        for (let mesh = floors.children[0]; mesh != null; mesh = floors.children[0]) 
        {
            utils.dispose(mesh)
            floors.remove(mesh)
        }
        for (let mesh = devices.children[0]; mesh != null; mesh = devices.children[0]) 
        {
            utils.dispose(mesh)
            devices.remove(mesh)
        }
        Object.keys(value).sort().forEach((value)=>
        {
            let device = build(value)
            devices.add(device)
            devices.position.set(0,0,0)
        })
    }
},{deep:true})


