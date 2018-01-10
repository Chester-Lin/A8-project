<template>
	<div style="height: 156px;margin-bottom: 6px;">
		<div class="hot">
			<div class="imgdiv">
				<img :src="selections.bigimg"/>
			</div>
			<div class="text">
				<span class="bigtext">{{selections.toptitle}}</span>
				<span class="mintext">{{selections.smtitle}}</span>
			</div>
			<div class="rightimg">
				<img :src="selections.smimg"/>
			</div>
		</div>
		<div class="botpic" style="margin-right: 1px;">
			<div class="bigimg">
				<img :src="selections.firstimg"/>
			</div>
			<span class="titletext">{{selections.firsttitle}}</span>
			<span class="bottomtext">{{selections.firsttime}}</span>
		</div>
		<div class="botpic">
			<div class="bigimg">
				<img :src="selections.secondimg"/>
			</div>
			<span class="titletext">{{selections.secondtitle}}</span>
			<span class="bottomtext">{{selections.secondtime}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			selections:{
				type:Object,
				default:{
					bigimg:require('../../assets/game/league/联赛_03.png'),
					toptitle:"综合体育",
					smtitle:"今天有四场比赛",
					smimg:require('../../assets/game/league/联赛_06.png'),
					firstimg:require('../../assets/game/league/联赛_11.png'),
					firsttitle:'体育新闻',
					firsttime:'18:00开始',
					secondimg:require('../../assets/game/league/联赛_13.png'),
					secondtitle:'冠军欧洲-世预赛前瞻',
					secondtime:'18:35开始'
				}
			}
		}
	}
</script>

<style scoped>
.hot{
	font-size: 15px;
	padding: 10px 15px;
	height: 40px;
	background: #FFFFFF;
	margin-bottom: 1.5px;
	text-align: left;
}
.hot .imgdiv{
	width: 55px;
	text-align: center;
	float: left;	
}
.hot .imgdiv img{
	height: 40px;
}
.text{
	float: left;
}
.text span{
	display: block;
}
.bigtext{
	font-size: 15px;
	color: #1B201E;
	margin-bottom: 5px;
}
.mintext{
	font-size: 12px;
	color: #838685;
}
.rightimg{
	float: right;
	padding: 10px 5px;
}
.rightimg img{
	width: 10px;
}
.botpic{
	height: 77px;
	width: 163px;
	padding: 7px 12px 12px 12px;
	position: relative;
	float: left;
	background: #FFFFFF;
}
.botpic .bigimg{
	float: left;
	padding-top: 6px;
}
.botpic .bigimg img{
	height: 40px;
}
.titletext{
	width: 100%;
	font-size: 15px;
	color: #19211e;
	text-align: center;
	padding: 0 5px;
	display: block;
}
.bottomtext{
	font-size: 9px;
	color: #19211e;
	display: block;
	position: absolute;
	bottom: 12px;
	right: 13px;
}	
</style>