<template>
	<div>
		<div class="hot">
			<span class="title">{{selections.title}}</span><br>
			<div class="sm-pic fl">
				<img :src="selections.smallpic"/>
			</div>
			<div class="sm-min-text fl">
				<span class="hot-font1">{{selections.game}}</span><br>
				<span class="hot-font2">{{selections.time}}</span>
			</div>
			<div class="sm-right">
				<span class="hot-font3 fr">{{selections.live}}</span>
				<img :src="selections.sspic" class="fr"/>
			</div>
			<div class="hot-bottom" style="clear: both;">
				<img :src="selections.peoplepic" class="fl"/>
				<span class="hot-font33 fl">{{selections.people}}</span>
				<span class="hot-font33 fr">{{selections.channel}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			selections:{
				type:Object,
				default:{
					title:'高尔夫',
					smallpic:require('../../assets/game/hot/热门_03.png'),
					game:'蓝湾LPGA高尔夫大师赛',
					time:'进行中',
					sspic:require('../../assets/game/hot/热门_06.png'),
					live:'直播中',
					peoplepic:require('../../assets/game/small/human.png'),
					people:'1728',
					channel:'CCTV5'
				}
			}
		}
	}
</script>

<style scoped>
.title{
	color: #848484;
	display: inline-block;
	text-align: left;
	width: 100%;
}
.hot{
	padding: 8px 10px;
	border-bottom: 1px solid #DEDEDE;
	background: #FFFFFF;
	height: 120px;
}
.hot-font1{
	font-size: 15px;
}
.hot-font2{
	font-size: 12px;
}
.hot-font3{
	font-size: 12px;
}
.hot-font33{
	font-size: 12px;
	color: #666666;
	margin-left: 10px;
}
.fl{
	float: left;
}
.fr{
	float: right;
}
.sm-pic img{
	width: 57px;
	padding: 15px 0;
}
.sm-min-text{
	width: 200px;
	text-align: center;
	padding: 15px 20px;
	height: 52px;
}
.sm-right{
	padding: 30px 0;
}
.sm-right img{
	width: 19px;
}
.hot-bottom img{
	width: 15px;
}
.hot-bottom{
	height: 15px;
}
</style>