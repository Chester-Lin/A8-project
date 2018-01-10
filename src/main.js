// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router' 
Vue.use(VueRouter)
// 一级路由导入的五个主页
import homeIndex from './pages/home/homeIndex.vue'
import gameIndex from './pages/game/gameIndex.vue'
import liveIndex from './pages/live/liveIndex.vue'
import followIndex from './pages/follow/followIndex.vue'
import userIndex from './pages/user/userIndex.vue'

//二级路由   home子页面
import homehot from './pages/home/hot.vue'
import video from './pages/home/video.vue'
import collection from './pages/home/collection.vue'
import special from './pages/home/special.vue'
import guessing from './pages/home/guessing.vue'
//二级路由   game子页面
import gamehot from './pages/game/hot.vue'
import lottery from './pages/game/lottery.vue'
import league from './pages/game/league.vue'
//二级路由   live子页面
import livehot from './pages/live/livehot.vue'
import theNew from './pages/live/theNew.vue'
import show from './pages/live/show.vue'


import DetailConvert from './pages/user/detail/convert'
import DetailGoldCoin from './pages/user/detail/goldCoin'
import DetailTask from './pages/user/detail/task'

Vue.config.productionTip = false


let router=new VueRouter({
	mode:"history",
	routes:[
		{
			path:'/',
			redirect:'/home'
		},
		{
			path:'/home',
			component:homeIndex,
			redirect:'/home/hot',
			children:[
				{
					path:'hot',
					component:homehot
				},
				{
					path:'video',
					component:video
				},
				{
					path:'collection',
					component:collection
				},
				{
					path:'special',
					component:special
				},
				{
					path:'guessing',
					component:guessing
				}
			]
		},
		{
			path:'/game',
			component:gameIndex,
			redirect:'/game/gamehot',
			children:[
				{
					path:'gamehot',
					component:gamehot
				},
				{
					path:'lottery',
					component:lottery
				},
				{
					path:'league',
					component:league
				}
			]
		},
		{
			path:'/live',
			component:liveIndex,
			redirect:'/live/livehot',
			children:[
				{
					path:'livehot',
					component:livehot
				},
				{
					path:'theNew',
					component:theNew
				},
				{
					path:'show',
					component:show
				}
			]
		},
		{
			path:'/follow',
			component:followIndex
		},
		{
			path:'/user',
			component:userIndex
		},
		{
			path:'/convert',
			component: DetailConvert
		},
		{
			path:'/goldCoin',
			component: DetailGoldCoin
		},
		{
			path:'/task',
			component: DetailTask
		}
	]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
