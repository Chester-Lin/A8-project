<template>
	<div class="theNew">
		<div class="big-img">
			<img :src="selections.bigpic"/>
		</div>
		<div class="big-bot-text">
			<div>{{selections.title}}<span class="ml5"><img src="../../assets/live/theNew/最新_10.png"/></span></div>
			<span class="zhubo">{{selections.address}}</span>
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
					bigpic:require('../../assets/live/show/秀场_03.png'),
					addres:'未知'
				}
			}
		}
	}
</script>

<style scoped>
.theNew{
	width: 163px;
	padding-bottom: 8px;
	margin: 0 auto;
	background: #FFFFFF;
}
.big-img img{
	width: 163px;
}
.big-bot-text{
	padding: 2px 12px;
	font-size: 16px;
	font-weight: bold;
}
.big-bot-text img{
	width: 15px;
}
.zhubo{
	margin-top: 5px;
	display: inline-block;
	padding: 2px 0px;
	color: #777777;
	font-size: 10px;
}
.ml5{
	margin-left: 6px;
}
</style>