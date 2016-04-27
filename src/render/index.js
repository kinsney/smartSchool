const THREE = window.THREE = require('three');
const store = require('../store');
const stats = require('./stats');
const controller = require('./controller');
const camera = require('./controller/camera');
const raycast = require('./plugins/raycast');
const zone  = require('./zone');
const table  = require('./table');

//添加性能查看器到场景
// document.body.appendChild(stats.domElement)；
//获取场景的canvasDom容器
const schoolDom = document.querySelector('#school');

//初始化渲染器
const Render  = new THREE.WebGLRenderer({canvas: schoolDom,antialias: true });
Render.shadowMap.enabled = true;
Render.shadowMap.soft = true;
Render.shadowMap.type = THREE.PCFSoftShadowMap;
Render.physicallyCorrectLights = true;

//改变窗口时重新设定渲染器大小
const setSize = () => { Render.setSize(window.innerWidth, window.innerHeight); };
window.addEventListener('resize', setSize);
setSize();

//监控变化，切换场景
var nowScene = window.scene = zone;
store.$watch('current',(newScn) =>
{
    if(newScn == 'zone')
    {
      window.scene = nowScene = zone;
    }
    if(newScn == 'table')
    {
      window.scene = nowScene = table;
    }
})


const render = () => 
{
  stats.begin();
  controller.update();

  raycast(nowScene);
  Render.render(nowScene,camera);

  stats.end() ;
  window.requestAnimationFrame(render);
}
window.requestAnimationFrame(render);
