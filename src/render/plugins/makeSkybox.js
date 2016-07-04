const THREE = require('three');

function makeSkyBox(folderName,situation) 
{
    var path = "sky/" + folderName + "/";
    var format = '.jpg';
    var urls =
        [
            path + 'posx' + format,
            path + 'negx' + format,
            path + 'posy' + format,
            path + 'negy' + format,
            path + 'posz' + format,
            path + 'negz' + format
        ];
    
    var loader = new THREE.CubeTextureLoader();
    loader.load(urls,function(texture)
    {
        texture.format = THREE.RGBFormat;
        texture.mapping = THREE.CubeReflectionMapping;
        var material = new THREE.ShaderMaterial(
        {
            fragmentShader: THREE.ShaderChunk['cube_frag'],
            vertexShader: THREE.ShaderChunk['cube_vert'],
            uniforms: 
            {
                "tCube": { type: "t", value: texture },
                "tFlip": { type: "f", value: - 1 }
            },
            depthWrite: false,
            side: THREE.BackSide
        });
        var skybox = new THREE.Mesh(new THREE.BoxGeometry(300000, 300000, 300000), material);
        situation.add(skybox);
    },function() {console.log('天空盒图片加载失败'); });
}

module.exports = makeSkyBox;