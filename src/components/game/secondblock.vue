<template>
	<div style="height: 164px;margin-bottom: 6px;">
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
			<div class="top">
				<img :src="selections.firstimg1"/>
				<span>{{selections.firstteam1}}</span>
				<span class="fr">{{selections.firstcode1}}</span>
			</div>
			<div class="top">
				<img :src="selections.firstimg2"/>
				<span>{{selections.firstteam2}}</span>
				<span class="fr c88">{{selections.firstcode2}}</span>
			</div>
			<div class="bot">
				<div>
					<img :src="selections.botimg1"/>
					<span>{{selections.bottext1}}</span>
				</div>
				<div class="fr">
					<img :src="selections.botimg2"/>
					<span>{{selections.bottext2}}</span>
				</div>
			</div>
		</div>
		<div class="botpic">
			<div class="top">
				<img :src="selections.secondimg2"/>
				<span>{{selections.secondteam1}}</span>
				<span class="fr">{{selections.secondcode1}}</span>
			</div>
			<div class="top">
				<img :src="selections.secondimg2"/>
				<span>{{selections.secondteam2}}</span>
				<span class="fr c88">{{selections.secondcode2}}</span>
			</div>
			<div class="bot">
				<div>
					<img :src="selections.botimg1"/>
					<span>{{selections.bottext1}}</span>
				</div>
				<div class="fr">
					<img :src="selections.botimg2"/>
					<span>{{selections.bottext2}}</span>
				</div>
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
					bigimg:require('../../assets/game/league/联赛_17.png'),
					toptitle:"NBA",
					smtitle:"今天有5场比赛",
					smimg:require('../../assets/game/league/联赛_06.png'),
					firstimg1:require('../../assets/game/league/联赛_22.png'),
					firstimg2:require('../../assets/game/league/联赛_27.png'),
					firstteam1:'活塞',
					firstteam2:'步行者',
					firstcode1:'114',
					firstcode2:'97',
					secondimg1:require('../../assets/game/league/联赛_20.png'),
					secondimg2:require('../../assets/game/league/联赛_26.png'),
					secondteam1:'魔术',
					secondteam2:'尼克斯',
					secondcode1:'112',
					secondcode2:'99',
					botimg1:require('../../assets/game/league/联赛_30.png'),
					bottext1:'录像',
					botimg2:require('../../assets/game/league/联赛_33.png'),
					bottext2:'集锦'
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
	margin-top: 10px;
	margin-right: 10px;
}
.hot .imgdiv img{
	height: 24px;
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
	height: 87px;
	width: 159px;
	padding: 9px 14px 8px 14px;
	position: relative;
	float: left;
	background: #FFFFFF;
	text-align: left;
}
.top{
	margin-bottom: 13px;
}
.top img{
	width: 25px;
	float: left;
}
.top span{
	font-size: 15px;
	color: #19211e;
	margin-left: 5px;
	display: inline-block;
}
.fr{
	float: right;
}
.top .c88{
	color: #888b8a;
}
.bot img{
	width: 15px;
}
.bot div{
	display: inline-block;
}
.bot span{
	font-size: 12px;
	color: #19211e;
	margin-left: 2px;
	display: inline-block;
}
</style>