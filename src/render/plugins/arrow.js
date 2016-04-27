const THREE = require('three');

var YColor = 0x47DF4E;
var XColor = 0xDF6418;
var ZColor = 0x116EFE;
var originPos = new THREE.Vector3(0,0,0);

var Ydirect = new THREE.Vector3(0,1,0);
var Xdirect = new THREE.Vector3(1,0,0);
var Zdirect = new THREE.Vector3(0,0,1);

function makeAxe(direct,origin,color,num)
{
	var endArrow = new THREE.Object3D();
	var goOrigin = new THREE.Vector3();
	var aLength = 1000;

	goOrigin.copy(origin);

	for(let i=1;i<=num;i++)
	{
		goOrigin.set((origin.x+direct.x*i*aLength),(origin.y+direct.y*i*aLength),(origin.z+direct.z*i*aLength));
		var aZize = aLength/10;

		if(i%5==0)  aZize *= 2;
		if(i%10==0)  aZize *= 2;
		
		var arrow = new THREE.ArrowHelper(direct,goOrigin,aLength,color,aZize,aZize/2);

		endArrow.add(arrow);
	}
	
	return endArrow;
}

function makeAxes()
{
	var arrowY = makeAxe(Ydirect,originPos,YColor,50);
	var arrowX = makeAxe(Xdirect,originPos,XColor,50);
	var arrowZ = makeAxe(Zdirect,originPos,ZColor,50);

	var myAxes = new THREE.Object3D();
	myAxes.add(arrowY,arrowX,arrowZ);

	return myAxes;
}

module.exports = makeAxes;


