<template>
	<div class="theNew-all">
		<ul class="theNew-ul">
			<li v-for="(item,index) in theNew">
				<v-smaPic :selections='theNew[index]' @on-click=''></v-smaPic>
			</li>
		</ul>
	</div>
</template>

<script>
import VSmaPic from '../../components/live/smaPic.vue'	
	export default {
		components:{
			VSmaPic
		},
		data(){
			return {
				theNew:[
					{
						title:'等你吃鸡',
						bigpic:require('../../assets/live/theNew/最新_03.png'),
						type:'体育主播'
					},
					{
						title:'垂钓小助手',
						bigpic:require('../../assets/live/theNew/最新_05.png'),
						type:'快乐垂钓'
					},
					{
						title:'乒羽小助手',
						bigpic:require('../../assets/live/theNew/最新_13.png'),
						type:'先锋乒羽'
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
	width: 375px;
}
.theNew-ul li{
	width: 187px;
	margin-top: 10px;
	float: left;
	
}
</style>