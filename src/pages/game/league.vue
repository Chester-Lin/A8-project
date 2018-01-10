<template>
	<div>
		<div class="topinfo">
			<span class="leftspan">我的联赛</span>
			<span class="rightspan">编辑</span>
		</div>
		<div style="clear: both;">
			<ul>
				<li>
					<v-firstblock :selections='firstblock[0]'></v-firstblock>
				</li>
			</ul>
		</div>
		<div style="clear: both;">
			<ul>
				<li>
					<v-secondblock :selections='secondblock[0]'></v-secondblock>
				</li>
			</ul>
		</div>
		
		<div style="clear: both;">
			<ul>
				<li v-for="(item,index) in leftpicinfo">
					<v-leftpic :selections='leftpicinfo[index]'></v-leftpic>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import VLeftpic from '../../components/game/leftpic.vue'
import VFirstblock from '../../components/game/firstblock.vue'
import VSecondblock from '../../components/game/secondblock.vue'
export default {
	components:{
			VFirstblock,
			VSecondblock,
			VLeftpic
	},
	data(){
		return {
			firstblock:[
				{
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
			],
			secondblock:[
				{
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
			],
			leftpicinfo:[
				{
					bigimg:require('../../assets/game/league/联赛_38.png'),
					toptitle:"英超",
					smtitle:"下一场比赛将在2017年11月18日开始",
					smimg:require('../../assets/game/league/联赛_06.png')
				},
				{
					bigimg:require('../../assets/game/league/联赛_40.png'),
					toptitle:"CBA",
					smtitle:"下一场比赛将在2017年11月22日开始",
					smimg:require('../../assets/game/league/联赛_06.png')
				},
				{
					bigimg:require('../../assets/game/league/联赛_43.png'),
					toptitle:"西甲",
					smtitle:"下一场比赛将在2017年11月18日开始",
					smimg:require('../../assets/game/league/联赛_06.png')
				},
				{
					bigimg:require('../../assets/game/league/联赛_46.png'),
					toptitle:"中超",
					smtitle:"下一场比赛将在2017年11月11日开始",
					smimg:require('../../assets/game/league/联赛_06.png')
				},
				{
					bigimg:require('../../assets/game/league/联赛_48.png'),
					toptitle:"德甲",
					smtitle:"下一场比赛将在2017年11月18日开始",
					smimg:require('../../assets/game/league/联赛_06.png')
				},
				{
					bigimg:require('../../assets/game/league/联赛_51.png'),
					toptitle:"意甲",
					smtitle:"下一场比赛将在2017年11月19日开始",
					smimg:require('../../assets/game/league/联赛_06.png')
				},
				{
					bigimg:require('../../assets/game/league/联赛_55.png'),
					toptitle:"欧冠",
					smtitle:"下一场比赛将在2017年11月22日开始",
					smimg:require('../../assets/game/league/联赛_06.png')
				},
				{
					bigimg:require('../../assets/game/league/联赛_59.png'),
					toptitle:"法甲",
					smtitle:"下一场比赛将在2017年11月18日开始",
					smimg:require('../../assets/game/league/联赛_06.png')
				},
				{
					bigimg:require('../../assets/game/league/联赛_62.png'),
					toptitle:"足球协",
					smtitle:"目前暂无比赛消息",
					smimg:require('../../assets/game/league/联赛_06.png')
				},
				{
					bigimg:require('../../assets/game/league/联赛_64.png'),
					toptitle:"亚冠",
					smtitle:"目前暂无比赛消息",
					smimg:require('../../assets/game/league/联赛_06.png')
				},
				{
					bigimg:require('../../assets/game/league/联赛_67.png'),
					toptitle:"中甲",
					smtitle:"目前暂无比赛消息",
					smimg:require('../../assets/game/league/联赛_06.png')
				}
			]
		}
	}
}
</script>

<style scoped>
	ul li{
		margin-bottom: 6px;
	}
	.topinfo{
		padding: 12px;
		height: 14px;
		color: #1b201e;
		font-size: 12px;
	}
	.leftspan{
		color: #9b9b9b;
		font-size: 14px;
		float: left;
	}
	.rightspan{
		font-size: 12px;
		float: right;
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
		border-bottom: 6px #F3F3F3 solid;
		padding: 6px 10px;
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
		font-size: 16px;
		position: relative;
		top: 15px;
	}
	.hot-font3{
		font-size: 12px;
		color: #838685;
		position: relative;
		top: 10px;
		left: 5px;
	}
	.hot2 .float-left{
		display: inline-block;
	}
	
	.hot-img9{
		width: 16px;
		height: 20px;
		position: relative;
		left: 180px;
		top: 13px;
		
	}
	.hot-img13{
		width: 16px;
		height: 20px;
		position: relative;
		left: 60px;
		top: 13px;
		
	}
	.hot-img14{
		width: 16px;
		height: 20px;
		position: relative;
		left: 160px;
		top: 13px;
		
	}
	.hot-img11{
		width: 42px;
		height: 42px;
	}
	.sai-2{
		border: 1px #F3F3F3 solid;
		width: 100%;
	}
	.sai-2 div{
		float: left;
	}
	.sai-2-left{
		border-right:2px #F3F3F3 solid;
		width: 50%;
		padding-bottom: 8px;
		border-bottom: 6px #F3F3F3 solid;
	}
	.sai-2-right{
		width: 48%;
		padding-bottom: 8px;
		border-bottom: 6px #F3F3F3 solid;
	}
	.sai-img1{
		width: 70px;
		height: 48px;
		padding-left: 12px;
		padding-top: 13px;
	}
	.sai-font1{
		font-weight: bold;
		font-size: 15px;
		position: relative;
		top: -36px;
		left:5px ;
	}
	.sai-font2{
		text-align: right;
		font-size: 11px;
		position: relative;
		top: 10px;
		left:120px ;
	}
	.sai-img4{
		width: 20px;
		height: 20px;
		margin: 2px 5px;
	}
	.sai-font4{
		font-size: 14px;
		font-weight: bold;
		position: relative;
		top: -5px;
		left: 2px;
	}
	.sai-font5{
		position: relative;
		top: -5px;
		left: 70px;
	}
	.sai-font6{
		color: darkgray;
		position: relative;
		top: -5px;
		left: 70px;
	}
	.sai-font7{
		font-size: 12px;
		position: relative;
		top: -5px;
		left: 70px;
		/*background-image: url(assets/header/sai/sai_33.png);
		background-position:left;
		background-repeat: no-repeat;
		background-size: 60%;*/
	}
</style>