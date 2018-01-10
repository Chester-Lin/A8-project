<template>
  <div id="app">
  	<div class="container">
  		<router-view></router-view>
  	</div>
    <div class="sp-bottom" v-if="hidebottom">
    	<ul class="sp-flex-container">
    		<router-link class="sp-flex-item" :to="{'path':'/home'}" active-class="homeActive" exact-active-class="acSpan" tag='li'>
    			<div @click='cgspan(1)'><span ref='myspan'>刷新</span></div>
    		</router-link>
    		<router-link class="sp-flex-item" :to="{'path':'/game'}" active-class="gameActive" exact-active-class="acSpan" tag='li'>
    			<div @click='cgspan(0)'><span>比赛</span></div>
    		</router-link>
     		<router-link class="sp-flex-item" :to="{'path':'/live'}" active-class="liveActive" tag='li' @click='cgspan(1)'>
    			<div @click='cgpic' ref='mylive'><span style="position: relative;right: 2px;">直播</span></div>
    		</router-link>
    		<router-link class="sp-flex-item" :to="{'path':'/follow'}" active-class="followActive" exact-active-class="acSpan" tag='li'>
    			<div @click='cgspan(0)'><span>关注</span></div>
    		</router-link>
    		<router-link class="sp-flex-item" :to="{'path':'/user'}" active-class="userActive" exact-active-class="acSpan" tag='li'>
    			<div @click='cgspan(0)'><span>我的</span></div>
    		</router-link>
    	</ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
  	return {
  		hidebottom:true
  	}
  },
   watch:{
  	$route(now,old){    //  监听路由变换，控制返回按钮的显示
  		if (now.path=="/convert"||now.path=="/goldCoin"||now.path=="/task") {
  			this.hidebottom=false;
  		} else{
  			this.hidebottom=true;
  		}
  	}
  },
  methods:{
  	cgspan(param) {
  		if (param==1) {
  			this.$refs.myspan.innerHTML='刷新'
  		}else{
  			this.$refs.myspan.innerHTML='首页'
  		}
  	},
  	cgpic() {
  		this.cgspan(0)
  		this.$refs.mylive
  	}
  }
}

</script>

<style>
	*{padding: 0;margin: 0;border: 0;}
	ul,li{list-style: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{ background: #f2f2f2;}
.sp-bottom{
	position: fixed;
	bottom: 0px;
	height: 49px;
	width: 100%;
	background: #ffffff;
}
.sp-flex-container {
  list-style: none; 
  display: flex;
  height: 49px;
  flex-direction: row;
  flex-wrap: wrap;
}
 
.sp-flex-item {
  width: 45px;
  height: 45px;
  padding: 2px 15px;
  flex: auto;
}
.sp-flex-item img {
	width: 25px;
	height: 25px;
}
.sp-bottom li div:before{
	content: '';
	display: block;
	width: 25px;
	height: 25px;
	margin: 0 auto;
	background-size: 25px 25px;
	background-repeat: no-repeat;
}
.sp-bottom .liveActive div:before{
	content: '';
	display: block;
	width: 45px;
	height: 45px;
	background-size: 42px 42px !important;
	background-image: url(assets/bottom/active/秀场_38.png) !important;
}

.sp-bottom li:nth-of-type(1) div:before{
	background-image: url(assets/bottom/关注_80.png);
}
.sp-bottom li:nth-of-type(2) div:before{
	background-image: url(assets/bottom/关注_83.png);
}
.sp-bottom li:nth-of-type(3) div:before{
	background-size: 25px 22px;
	background-image: url(assets/bottom/关注_73.png);
}
.sp-bottom li:nth-of-type(4) div:before{
	background-image: url(assets/bottom/集锦_22.png);
}
.sp-bottom li:nth-of-type(5) div:before{
	background-image: url(assets/bottom/关注_77.png);
}

.sp-bottom .homeActive div:before{
	background-image: url(assets/bottom/active/集锦_20.png) !important;
}
.sp-bottom .gameActive div:before{
	background-image: url(assets/bottom/active/竞彩_50.png) !important;
}
.sp-bottom .followActive div:before{
	background-image: url(assets/bottom/active/关注_75.png) !important;
}
.sp-bottom .userActive div:before{
	background-image: url(assets/bottom/active/我_56.png) !important;
}


.sp-bottom .sp-flex-item span{
	color: #8a8d8c;
	font-size: 12px;
}
.sp-bottom .acSpan span{
	color: #1d1d1d;
}
</style>
