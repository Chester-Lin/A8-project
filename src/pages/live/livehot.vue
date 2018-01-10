<template>
	<div>
		<div class="topPic"><img src="../../assets/live/livehot/直播-热门_02.png"/></div>
		<div>
			<ul class="livehot-info">
				<li v-for="(item,index) in liveHot">
					<v-bigPic :selections='liveHot[index]' @on-click=''></v-bigPic>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import VBigPic from '../../components/live/bigPic.vue'	
	export default {
		components:{
			VBigPic
		},
		data(){
			return {
				liveHot:[
					{
						title:'等你吃鸡',
						smallpic:require('../../assets/live/livehot/直播-热门_05.png'),
						bigpic:require('../../assets/live/livehot/直播-热门_08.png'),
						xingji:'★1',
						type:'体育主播',
						people:'121'
					},
					{
						title:'垂钓小助手',
						smallpic:require('../../assets/live/livehot/直播-热门_11.png'),
						bigpic:require('../../assets/live/livehot/直播-热门_14.png'),
						xingji:'★1',
						type:'快乐垂钓',
						people:'33553'
					},
					{
						title:'乒羽小助手',
						smallpic:require('../../assets/live/livehot/直播-热门_16.png'),
						bigpic:require('../../assets/live/livehot/直播-热门_19.png'),
						xingji:'★1',
						type:'先锋乒羽',
						people:'32631'
					}
				]
			}
		}
	}
</script>

<style scoped>
.topPic{
	margin-bottom: 8px;
}
.topPic img{
	width: 375px;
}
.livehot-info,.livehot-info li{
	list-style: none;
	margin-bottom: 12px;
}
</style>