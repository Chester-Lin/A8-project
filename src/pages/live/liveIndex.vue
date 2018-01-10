<template>
	<div>
		<div style="position: fixed;top: 0;width: 100%;background: #FFFFFF;z-index: 10;">
			<v-topinfo :selections='gameTop' @on-click=''></v-topinfo>
		</div>
		<div style="height: 49px;"></div>
		
		<div class="container">
	  		<keep-alive>
			 	<router-view></router-view>
			</keep-alive>
	    </div>
	    <div class="footer">
	    	这是底部部分
	    	
	    </div>
	</div>
</template>

<script>
import VTopinfo from '../../components/topinfo.vue'

export default {
	components:{
		VTopinfo
	},
	data(){
		return {			
			gameTop:[{
				label:'热门',
				path:'/live/livehot'
			},{
				label:'最新',
				path:'/live/theNew'
			},{
				label:'秀场',
				path:'/live/show'
			}]
		}
	}
}
</script>

<style scoped>
.container{
	background: #F7F4F6;
}
.footer{
	opacity: 0;
	height: 49px;
}
</style>