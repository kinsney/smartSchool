const THREE = require('three');

const camera = module.exports = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1e6);

camera.position.set(0,20000,12000);
window.addEventListener('resize', () =>
{
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
