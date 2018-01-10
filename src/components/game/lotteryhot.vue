<template>
	<div class="hot">
		<div class="hot1">
			<span class="red">{{selections.title1}}</span>
			<span class="gray">{{selections.title2}}</span>
			<div style="height: 50px;padding: 15px 0;">
				<div class="hot-left fl">
					<img :src="selections.smallpic1"/><span class="fonts">{{selections.team1}}</span><br>
					<img :src="selections.smallpic2"/><span class="fonts">{{selections.team2}}</span>
				</div>
				<div class="fl hot-min-text">
					<span class="hot-font2">{{selections.time}}</span>
				</div>
				<div class="fr hot-right">
					<img :src="selections.sspic"/>
				</div>
			</div>
			<div class="mybaoliao"><span class="baoliao">{{selections.smtitle1}}</span><span class="baoliao-info">{{selections.smtitle2}}</span></div>
			<div class="hot-bottom">
				<img :src="selections.peoplepic"/>
				<span class="hot-font33">{{selections.people}}</span>
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
					title1:'#竞足 009#',
					title2:'足球友谊赛',
					smallpic1:require('../../assets/game/competition/竞彩_03.png'),
					smallpic2:require('../../assets/game/competition/竞彩_06.png'),
					team1:'罗马尼亚',
					team2:'土耳其',
					time:'02:15开始',
					sspic:require('../../assets/game/small/voice.png'),
					smtitle1:'爆料：',
					smtitle2:'XXXXX',
					peoplepic:require('../../assets/game/small/human.png'),
					people:'1728'
				}
			}
		}
	}
</script>

<style scoped>
.hot{
	font-size: 15px;
	padding: 10px 15px;
	border-bottom: 1px solid #bfbfbf;
	background: #FFFFFF;
	text-align: left;
	height: 147px;
}
.red{ color: red; }	
.gray{ color: #848484; }
.fonts{
	font-size: 18px;
	margin: -4px 0 0 5px;
}
.fl{
	float: left;
}
.fr{
	float: right;
}
.mybaoliao{
	margin: 0 auto; 
	background: #DEDEDE;
}
.hot-left img{
	width: 21px;
}
.hot-min-text{
	padding: 15px 0;
	width: 130px;
	text-align: center;
}
.hot-right{
	padding:15px 0;
}
.hot-right img{
	width: 20px;
}
.baoliao{
	font-size: 18px;
	font-weight: bold;
}
.baoliao-info{
	font-size: 16px;
	color: #848484;
}
.hot-bottom{
	text-align: left;
	padding: 10px 0 0 0;
}
.hot-bottom img{
	width: 15px;
	margin-left: 5px;
}
.hot-font33{
	font-size: 11px;
	color: #b2b5b4;
	margin-left: 10px;
}	
</style>