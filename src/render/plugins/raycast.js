const THREE = require('three')
const camera = require('../controller/camera')
const store = require('../../store.js')
const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()
let hoverObjectName = store.hoverObjectName
let temp = null

module.exports = (scene) =>
{
    if (!store.hoverEnabled)
    {
        store.hoverObjectName = ''
        return
    }
    raycaster.setFromCamera(mouse, camera)
    const nearest = raycaster.intersectObject(scene, true)[0]
    const targetHoverObjectName = nearest != null ? nearest.object.name : ''
    if (hoverObjectName !== targetHoverObjectName)
    {
        store.hoverObjectName = hoverObjectName = targetHoverObjectName
    }
}

document.addEventListener('mousemove', (event) =>
{
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
});
document.addEventListener('mousedown',(e) =>
{
    temp = store.hoverObjectName
});
document.addEventListener('mouseup',(e) =>
{

    if (store.hoverEnabled&&temp==store.hoverObjectName)
    {
        if(store.hoverObjectName)store.currentObjectName = store.hoverObjectName
    }
});



