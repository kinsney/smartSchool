const Vue = require('vue');
const Vuex = require('vuex');
Vue.use(Vuex);


const state =
{
	isLogin:false,  //登录状态应该通过会话控制进行获取和设置，以保证会话的安全性
	loginBox:false, //全局的登录框是否显示
	routeSite:{scope:"campus",menu:"Environment"},   //scope取campus,building,floor三个层面,menu取Environment,Security,Energy,Asset
	selectors:
	{
		campus:
		{
			Environment:
			{ 
				hardware:{streetLight:true},
				panel:{weather:true,streetLight:true} 
			},
			Security:
			{ 
				hardware:{camera:true},
				panel:{camera:true,warning:true} 
			},
			Energy:
			{ 
				hardware:{energy:true},
				panel:{energy:true} 
			},
			Asset:
			{ 
				hardware:{breaker:true,camera:true,streetLight:true},
				panel:{asset:true} 
			}
		},
		building:
		{
			Environment:
			{ 
				hardware:{},
				panel:{weather:true} 
			},
			Security:
			{ 
				hardware:{camera:true},
				panel:{camera:true,warning:true} 
			},
			Energy:
			{ 
				hardware:{},
				panel:{energy:true} 
			},
			Asset:
			{ 
				hardware:{camera:true},
				panel:{asset:true} 
			}
		},
		floor:
		{
			Environment:
			{ 
				hardware:{aircon:true,roomLight:true},
				panel:{weather:true} 
			},
			Security:
			{ 
				hardware:{camera:true,smogSensor:true,door:true},
				panel:{camera:true,warning:true} 
			},
			Energy:
			{ 
				hardware:{energy:true},
				panel:{energy:true} 
			},
			Asset:
			{ 
				hardware:{aircon:true,roomLight:true,camera:true,smogSensor:true,door:true,equipment:true,breaker:true},
				panel:{asset:true} 
			}
		}
	}
};

// window.test = state.selectors['floor']['Asset']['hardware'];

const mutations =
{
	SetRoutSite({routeSite},newVal)
	{
		if(newVal.scope) { routeSite.scope = newVal.scope; }
		if(newVal.menu) { routeSite.menu = newVal.menu; }
	},
	switchLogin(state,newVal)
	{
		state.isLogin = newVal;
	},
	switchLoginBox(state,newVal)
	{
		state.loginBox = newVal;
	},
	siwtchSelector({selectors,routeSite},str1,str2,val)
	{
		selectors[routeSite.scope][routeSite.menu][str1][str2] = val;
	}
};

window.actStore = module.exports = new Vuex.Store(
{
	state,
	mutations
});
