<template>
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
					smimg:require('../../assets/game/league/联赛_06.png')
				}
			}
		}
	}
</script>

<style scoped>
.hot{
	font-size: 15px;
	padding: 10px 10px;
	height: 40px;
	background: #FFFFFF;
	text-align: left;
}
.hot .imgdiv{
	width: 70px;
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
	padding: 10px 10px;
}
.rightimg img{
	width: 10px;
}
</style>