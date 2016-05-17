/**——————————————————————————————————————————————————————————————
 *
 * 从后台获取场景数据
 *
 * 可以采用socket方式与后台保持数据同步
 *
 * 只用于数据获取，任何修改后台数据逻辑的操作都不应该在这里出现，良好的
 * 逻辑应当是先将数据修改提交到后台，如果后台修改成功，再将变动返还到此
 *
 * 三个层面的数据应当按照需求去读取加载而不是全部包含
 * 
——————————————————————————————————————————————————————————————**/

var scopeCampus  = { D:require('./dataModel/campus.json') };
var scopeBuiding = { D:require('./dataModel/building.json') };
var scopeFloor   = { D:require('./dataModel/floor.json') };
var globalInfo   = { D:require('./dataModel/globalInfo.json') };

/**
 * [根据后台传过来的值，动态修改model的值]
 * @param  {[String]} model [以上四个model变量名]
 * @param  {[Array]} val   [以对象的方式发送数据]
 *
 * val例举:
 *  [
 * 		{ key:'.building.building1', val:{···} },
 * 		{ key:'.building.building1.tag', val:'教四楼' }
 *  ]
**/
function dynamicData(model,val)
{
	val.forEach((val)=>
	{
		var str = model+val.key;
	});
}

exports.campus = scopeCampus;
exports.building = scopeBuiding;
exports.floor = scopeFloor;
exports.globalInfo = globalInfo;


