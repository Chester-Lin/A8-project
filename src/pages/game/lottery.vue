<template>
	<div>
		<div class="today">今天</div>
		<div>
			<ul>
				<li v-for="(item,index) in lotteryInfo">
					<v-lotteryhot :selections='lotteryInfo[index]'></v-lotteryhot>
				</li>
			</ul>
		</div>	
	</div>
</template>

<script>
import 	VLotteryhot from '../../components/game/lotteryhot.vue'
	export default {
		components:{
			VLotteryhot
		},
		data(){
			return {
				lotteryInfo:[
					{
						title1:'#竞足 009#',
						title2:'足球友谊赛',
						smallpic1:require('../../assets/game/competition/竞彩_03.png'),
						smallpic2:require('../../assets/game/competition/竞彩_06.png'),
						team1:'罗马尼亚',
						team2:'土耳其',
						time:'02:15开始',
						sspic:require('../../assets/game/small/voice.png'),
						smtitle1:'爆料：',
						smtitle2:'罗马尼亚无缘世界杯',
						peoplepic:require('../../assets/game/small/human.png'),
						people:'1728'
					},
					{
						title1:'#竞足 010#',
						title2:'足球友谊赛',
						smallpic1:require('../../assets/game/competition/竞彩_08.png'),
						smallpic2:require('../../assets/game/competition/竞彩_10.png'),
						team1:'伊朗',
						team2:'巴拿马',
						time:'02:30开始',
						sspic:require('../../assets/game/small/voice.png'),
						smtitle1:'爆料：',
						smtitle2:'巴拿马世界排名上升11位',
						peoplepic:require('../../assets/game/small/human.png'),
						people:'12222'
					},
					{
						title1:'#竞足 004#',
						title2:'世预赛欧洲赛区附加赛首回合',
						smallpic1:require('../../assets/game/competition/竞彩_12.png'),
						smallpic2:require('../../assets/game/competition/竞彩_14.png'),
						team1:'克罗地亚',
						team2:'希腊',
						time:'03:45开始',
						sspic:require('../../assets/game/small/voice.png'),
						smtitle1:'    爆料：',
						smtitle2:'马诺拉斯因洗牌被停赛',
						peoplepic:require('../../assets/game/small/human.png'),
						people:'1837'
					},
					{
						title1:'#竞足 003#',
						title2:'世预赛欧洲赛区附加赛首回合',
						smallpic1:require('../../assets/game/competition/竞彩_17.png'),
						smallpic2:require('../../assets/game/competition/竞彩_21.png'),
						team1:'北爱尔兰',
						team2:'瑞士',
						time:'03:45开始',
						sspic:require('../../assets/game/small/voice.png'),
						smtitle1:'    爆料：',
						smtitle2:'北爱尔兰队长百场里程碑',
						peoplepic:require('../../assets/game/small/human.png'),
						people:'1783'
					},
					{
						title1:'#竞足 011#',
						title2:'足球热身赛',
						smallpic1:require('../../assets/game/competition/竞彩_25.png'),
						smallpic2:require('../../assets/game/competition/竞彩_29.png'),
						team1:'北爱尔兰',
						team2:'瑞士',
						time:'03:45开始',
						sspic:require('../../assets/game/small/voice.png'),
						smtitle1:'    爆料：',
						smtitle2:'橙衣军团3连胜',
						peoplepic:require('../../assets/game/small/human.png'),
						people:'5361'
					},
					{
						title1:'#竞足 005#',
						title2:'巴甲',
						smallpic1:require('../../assets/game/competition/竞彩_32.png'),
						smallpic2:require('../../assets/game/competition/竞彩_34.png'),
						team1:'米竞技',
						team2:'戈竞技',
						time:'06:00开始',
						sspic:require('../../assets/game/small/voice.png'),
						smtitle1:'    爆料：',
						smtitle2:'米竞技阵容接近完整  仅一主力停赛',
						peoplepic:require('../../assets/game/small/human.png'),
						people:'1753'
					},
					{
						title1:'#竞足 006#',
						title2:'巴甲',
						smallpic1:require('../../assets/game/competition/竞彩_36.png'),
						smallpic2:require('../../assets/game/competition/竞彩_38.png'),
						team1:'圣保罗',
						team2:'沙佩科',
						time:'06:00开始',
						sspic:require('../../assets/game/small/voice.png'),
						smtitle1:'',
						smtitle2:'',
						peoplepic:require('../../assets/game/small/human.png'),
						people:'6221'
					},
					{
						title1:'#竞足 007#',
						title2:'巴甲',
						smallpic1:require('../../assets/game/competition/竞彩_40.png'),
						smallpic2:require('../../assets/game/competition/竞彩_45.png'),
						team1:'佛鲁米嫩',
						team2:'科里蒂巴',
						time:'07:00开始',
						sspic:require('../../assets/game/small/voice.png'),
						smtitle1:'爆料：',
						smtitle2:'科里蒂巴王牌射手复出',
						peoplepic:require('../../assets/game/small/human.png'),
						people:'7256'
					}
				]
			}
		}
	}
</script>

<style scoped>
.today{
	width: 100%;
	height: 28px;
	background:#F2F2F2;
	text-align: center;
	color: #1b201e;
	font-size: 12px;
	line-height:25px;
}	
	
	.header1{
		width: 100%;
		height: 44px;
		border: 1px red solid;
	}
	.header1 ul li{
		list-style: none;
		float: left;
		border-bottom: 2px black solid;
		height: 25px;
		font-size: 25px;
		line-height: 5px;
		margin-left: 30px;
	}
	.hot1{
		width: 100%;

	}
	.hot2{
		margin: 11px 10px;
	}
	.hot3{
		width: 100%;
		margin-right:10px;
		margin-top:17px ;
		text-align: center;
	}
	
	
	.hot-center{
		text-align: center;
		margin-bottom: -40px;
		position: relative;
		top: -15px;
	}
	.hot-right{
		text-align: right;
		margin-right: 13px;
		position: relative;
		top: -25px;
		left: 10px;
	}
	.hot-font2{
		font-size: 12px;
		margin-left: 40px;
	}
	.hot2 .float-left{
		display: inline-block;
	}
	.hot-img3{
		width: 15px;
		height: 14px;
	}
	.hot-img9{
		width: 20px;
		height: 22px;
		margin-left: 92px;
	}
	.hot-img12{
		width: 20px;
		height: 22px;
		margin-left: 92px;
	}
	.hot-img11{
		width: 21px;
		height: 20px;
	}
	.fonts{
		font-size: 18px;
		position: relative;
		top: -5px;
	}
	.hot-font33{
		font-size: 11px;
		color: #b2b5b4;
	}
	.hot3-left{
		text-align: left;
		border-bottom: 1px #848484 solid;
	}
	.hot3-right{
		margin-left:240px ;
		color: #9da09f;
		font-size:11px ;
	}
	.cai-1{
		width: 100%;
		height: 20px;
		background:lightgray ;
	}
	.cai-2{
		font-size: 18px;
		font-weight: bold;
	}
	.cai-3{
		font-size: 15px;
		color: #848484;
		position: relative;
		top: -3px;
	}
</style>