/**
 * 记录所有场景中的模型：（其中能合并的全合并）
 * 建筑，路灯，摄像头，断路器，楼层，空调，门，室内灯，传感器？······
 *-----------------------------------------------------------
 * 需要记录模型相关的参数：
 * 名称：名称用于进行识别和标识——（保证唯一性或通过命名空间做到唯一性）
 * 标签：标签用于对名称的辅助显示例如：“教三楼南侧第二个摄像头”
 * 位置：位置用于设置在场景中的位置，进一步用于计算关联dom的位置
 * 状态：开启/关闭---故障/完好——————————本质上也属于对象数据
 * 模型：模型对应的模型文件名通过键值索引去查找
 * 数据：模型对象的数据------例如警告信息，灯亮度，能耗信息········
 * 
 * 子对象：子对象以同样的结构信息向下传递
 * -----------------------------------------------------------
 * 后台可通过此数据模型传递数据，所以这是一个约定的前后端数据接口模型
 */

var scopeCampus = 
{
	building:
	{
		b1:
		{
			tage:"教三楼",
			position:{x:0,y:0,z:0},
			state:"onCourse",
			data: {}
		}
	},
	streetlight:
	{
		s1:
		{
			tage:"主干道3号灯",
			position:{x:0,y:0,z:0},
			state:{power:true,damage:false},
			data: {}
		}
	},
	camera:
	{
		c1:
		{
			tage:"教三楼南侧第二个摄像头",
			position:{x:0,y:0,z:0},
			state:{power:true,damage:false},
			data: {}
		}
	},
	breaker:
	{
		bk1:
		{
			tage:"教三楼南侧第二个断路器",
			position:{x:0,y:0,z:0},
			state:false,
			data: {}
		}
	}
}

var scopeBuiding = 
{
	b1:
	{
		tage:"教三楼",
		position:{x:0,y:0,z:0},
		state:"onCourse",
		data: {},
		floor:
		{
			f1:
			{
				tage:"",
				position:{x:0,y:0,z:0},
				state:"",
				data: {}
			}
		}
	},
	camera:
	{
		c1:
		{
			tage:"教三楼南侧第二个摄像头",
			position:{x:0,y:0,z:0},
			state:{power:true,damage:false},
			data: {}
		}
	}
}

var scopeFloor = 
{
	/*各个设备的信息*/
}





