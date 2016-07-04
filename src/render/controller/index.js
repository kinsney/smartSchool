const THREE = require('three');

const camera = require('./camera');
require('../plugins/OrbitControls');

//获取场景的canvasDom容器
const schoolDom = document.querySelector('#interact');

const controls = module.exports = new THREE.OrbitControls(camera,schoolDom);
Object.assign(controls, {

  enableDamping: true,
  dampingFactor: 0.2,

  maxDistance:30000,

  rotateSpeed: 0.2,
  autoRotateSpeed: -0.3,

  // enablePan: false,
  enableKeys: false,

  minPolarAngle: Math.PI / 180 * 20,  //50
  maxPolarAngle: Math.PI / 180 * 90,  //80
  autoRotate:false
})

controls.target.set(0, 1000, 0)







