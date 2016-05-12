const camera = require('../render/controller/camera.js');
const THREE = window.THREE = require('three');

function getPos({x,y,z})
{
	var v = new THREE.Vector3(x,y,z);

	// console.log(v);
	v.project(camera);
	// console.log(v);

    var hW = window.innerWidth / 2;  
    var hH = window.innerHeight / 2;  
      
    return {
        x: Math.round(v.x * hW + hW ), 
        y: Math.round(-v.y * hH + hH)
    };
}


module.exports = getPos;