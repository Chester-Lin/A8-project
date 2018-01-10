<template>
	<div class="big-all">
		<div class="big-top">
			<div class="big-top-right">
				<span>{{selections.people}}</span><span style="margin-left: 6px;">在看</span>
			</div>
			<div class="big-top-left">
				<div class="small-pic">
					<img :src="selections.smallpic"/>
				</div><div class="small-text">
					<div class="small-text-top">
						<span class="small-text-title">{{selections.title}}</span>
						<span><img src="../../assets/live/livehot/address.jpg" width="14px"/></span>
						<span class="small-text-address">未知</span>
					</div>
					<div class="small-text-bottom">
						<span class="xingji">{{selections.xingji}}</span><span class="zhubo">{{selections.type}}</span>
					</div>
				</div>
			</div>
			
		</div>
		<div class="big-pic">
			<img :src="selections.bigpic"/>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			selections:{
				type:Object,
				default:{
					title:'等你吃鸡',
					smallpic:require('../../assets/live/livehot/直播-热门_05.png'),
					bigpic:require('../../assets/live/livehot/直播-热门_08.png'),
					xingji:'★1',
					type:'体育主播',
					people:'121'
				}
			}
		}
	}
</script>

<style scoped>
.big-all{
	width: 350px;
	padding: 19px 12px 8px 13px;
	background: #FFFFFF;
}
.big-top{
	position: relative;
	margin-bottom: 18px;
}
.big-top-left{
	width: 200px;
	height: 37px;
}
.small-pic,.small-text{
	display: inline-block;
	height: 37px;
}
.small-text{
	margin-left: 8px;
}
.small-text span{
	font-weight: bold;
}
.small-text-title{
	font-size: 19px;
	margin-right: 2px;
}
.small-text-address{
	font-size: 9px;
	color: #777777;
	margin-left: 0px;
	margin-left: 2px;
}
.small-text-bottom{
	text-align: left;
}
.small-text-bottom span{
	display: inline-block;
	padding: 2px 6px;
	color: white;
	font-size: 10px;
	
}
.xingji{
	background: #c5eca4;
}
.zhubo{
	background: #f6c501;
	margin-left: 6px;
}
.small-pic img{
	width: 35px;
}
.big-top-right{
	position: absolute;
	right: 0;
}
.big-top-right span{
	font-size: 9px;
	color: #f1d051;
}

.big-pic img{
	width: 350px;
}
</style>