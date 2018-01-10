<template>
	<div class="theNew-all">
		<ul class="theNew-ul">
			<li v-for="(item,index) in theNew">
				<v-showPic :selections='theNew[index]' @on-click=''></v-showPic>
			</li>
		</ul>
	</div>
</template>

<script>
import VShowPic from '../../components/live/showPic.vue'	
	export default {
		components:{
			VShowPic
		},
		data(){
			return {
				theNew:[
					{
						title:'嘉嘉求宠爱v',
						bigpic:require('../../assets/live/show/秀场_03.png'),
						address:'未知'
					},
					{
						title:'倾听者',
						bigpic:require('../../assets/live/show/秀场_05.png'),
						address:'未知'
					},
					{
						title:'学会温柔润妹',
						bigpic:require('../../assets/live/show/秀场_09.png'),
						address:'未知'
					},
					{
						title:' 翩翩起舞',
						bigpic:require('../../assets/live/show/秀场_10.png'),
						address:'三门峡使'
					},
					{
						title:'乒羽小助手',
						bigpic:require('../../assets/live/show/秀场_13.png'),
						address:'北京市'
					},
					{
						title:'乒羽小助手',
						bigpic:require('../../assets/live/show/秀场_14.png'),
						address:'深圳市'
					},
					{
						title:'乒羽小助手',
						bigpic:require('../../assets/live/show/秀场_17.png'),
						address:'先锋乒羽'
					},
					{
						title:'乒羽小助手',
						bigpic:require('../../assets/live/show/秀场_18.png'),
						address:'先锋乒羽'
					},
					{
						title:'乒羽小助手',
						bigpic:require('../../assets/live/show/秀场_21.png'),
						address:'先锋乒羽'
					},
					{
						title:'乒羽小助手',
						bigpic:require('../../assets/live/show/秀场_22.png'),
						address:'先锋乒羽'
					},
					{
						title:'乒羽小助手',
						bigpic:require('../../assets/live/show/秀场_25.png'),
						address:'先锋乒羽'
					},
					{
						title:'乒羽小助手',
						bigpic:require('../../assets/live/show/秀场_26.png'),
						address:'先锋乒羽'
					},
					{
						title:'乒羽小助手',
						bigpic:require('../../assets/live/show/秀场_29.png'),
						address:'先锋乒羽'
					},
					{
						title:'乒羽小助手',
						bigpic:require('../../assets/live/show/秀场_30.png'),
						address:'先锋乒羽'
					},
					{
						title:'乒羽小助手',
						bigpic:require('../../assets/live/show/秀场_33.png'),
						address:'先锋乒羽'
					},
					{
						title:'乒羽小助手',
						bigpic:require('../../assets/live/show/秀场_34.png'),
						address:'先锋乒羽'
					}
				]
			}
		}
	}	
</script>

<style scoped>
.theNew-ul,.theNew-ul li{
	list-style: none;
	text-align: left;
}
.theNew-ul{
	width: 100%;	
}
.theNew-ul li{
	width: 50%;
	margin-top: 10px;
	display: inline-block;
}
</style>