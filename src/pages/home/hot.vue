<template>
	<div class="hot">
		<img src="../../assets/home/热门/首页-热门_02.png"/>
		<div class="team">
			<div v-for="ts in tname" class="group" :class="ts.borders">
				<p class="p1">{{ts.name}}</p>
				<span class="s1">{{ts.numbers}}</span>
			</div>
			<div v-for="t in teams" class="group" :class="t.borders">
				<img :src="t.src" class="group-img">
				<p class="p2">{{t.name}}</p>
				<span class="s2" :class="t.clor">{{t.numbers}}</span>
			</div>
		</div>
		<div class="mar">
			<div class="quick">
				<div><img src="../../assets/home/热门/首页-热门_15.png"/></div>
				<div class="quick-span"><span>CBA:北京119-93大胜天津，翟小川25+9</span></div>
			</div>
		</div>
		<this-left-right :leftandright="LandR1"></this-left-right>
		<div class="player">
			<div class="player-tet">
				<div class="tet-left">体育主播</div>
				<div class="tet-right">查看更多></div>
			</div>
			<div class="player-img">
				<div class="player-img-img" v-for="imgs in playimg" :class="imgs.mar">
					<img :src="imgs.src1"/>
					<span class="play-span1">{{imgs.name}}</span>
					<div class="play-img2"><img :src="imgs.src2"/></div><br />
					<span class="play-span2">{{imgs.titles}}</span>
				</div>
			</div>
		</div>
		<this-left-right :leftandright="LandR2"></this-left-right>
	</div>
</template>

<script>
import thisLeftRight from '../../components/home/leftandright'
export default{
	data(){
		return {
			tname:[
				{
					name:"NBA",
					numbers:"直播中",
					borders:'border1'
				},
				{
					name:"NBA",
					numbers:"直播中",
					borders:'border2'
				}
			],
			teams:[
				{
					name:"骑士",
					src:require('../../assets/home/热门/首页-热门_05.png'),
					numbers:124,
					clor:"c1",
					borders:'border1'
				},
				{
					name:"马刺",
					src:require('../../assets/home/热门/首页-热门_07.png'),
					numbers:52,
					clor:"c2",
					borders:'border2'
				},
				{
					name:"雄鹿",
					src:require('../../assets/home/热门/首页-热门_12.png'),
					numbers:119,
					clor:"c2",
					borders:'border1'
				},
				{
					name:"快船",
					src:require('../../assets/home/热门/首页-热门_11.png'),
					numbers:55,
					clor:"c1",
					borders:'border2'
				}
			],
			LandR1:[
				{
					src1:require('../../assets/home/热门/首页-热门_19.png'),
					titles:'【战报】骑士124-119送雄鹿四连败,字母哥空砍40+9',
					top:"置顶",
					src2:require('../../assets/public/竞猜_06.png'),
					span3:453,
					src3:require('../../assets/public/竞猜_08.png'),
					span4:0
				},
				{
					src1:require('../../assets/home/热门/首页-热门_22.png'),
					titles:'【战报】双塔合砍69分,鹈鹕117-112逆转步行者取三连胜',
					top:"置顶",
					src2:require('../../assets/public/竞猜_06.png'),
					span3:273,
					src3:require('../../assets/public/竞猜_08.png'),
					span4:1
				}
			],
			LandR2:[
				{
					src1:require('../../assets/home/热门/首页-热门_34.png'),
					titles:'官方:中国杯明年3月南宁开打',
					top:"置顶",
					src2:require('../../assets/public/竞猜_06.png'),
					span3:455,
					src3:require('../../assets/public/竞猜_08.png'),
					span4:0
				},
				{
					src1:require('../../assets/home/热门/首页-热门_37.png'),
					titles:'“琦还公”,走上人生巅峰！',
					span1:'A8早报',
					have:"t1",
					top:"置顶",
					src2:require('../../assets/public/竞猜_06.png'),
					span3:"1.2万",
					src3:require('../../assets/public/竞猜_08.png'),
					span4:34
				},
				{
					src1:require('../../assets/home/热门/首页-热门_39.png'),
					titles:'克劳德:赢家从不言放弃,轻言放弃绝不会赢',
					src2:require('../../assets/public/竞猜_06.png'),
					span3:532,
					src3:require('../../assets/public/竞猜_08.png'),
					span4:2
				},
				{
					src1:require('../../assets/home/热门/首页-热门_41.png'),
					titles:'吉诺比利:就长期发展来说,伦纳德缺阵也是好事',
					src2:require('../../assets/public/竞猜_06.png'),
					span3:726,
					src3:require('../../assets/public/竞猜_08.png'),
					span4:4
				},
				{
					src1:require('../../assets/home/热门/首页-热门_43.png'),
					titles:'耐克将为字母哥设计签名鞋,阿迪李宁曾参加与争夺',
					src2:require('../../assets/public/竞猜_06.png'),
					span3:533,
					src3:require('../../assets/public/竞猜_08.png'),
					span4:1
				},
				{
					src1:require('../../assets/home/热门/首页-热门_45.png'),
					titles:'小里弗斯:保罗和格里芬之间的关系很奇怪,不懂他们谁是老大',
					src2:require('../../assets/public/竞猜_06.png'),
					span3:536,
					src3:require('../../assets/public/竞猜_08.png'),
					span4:4
				},
				{
					src1:require('../../assets/home/热门/首页-热门_47.png'),
					titles:'布莱索评基德投三分:棒棒哒教练！',
					src2:require('../../assets/public/竞猜_06.png'),
					span3:119,
					src3:require('../../assets/public/竞猜_08.png'),
					span4:6
				}
			],
			playimg:[
				{
					src1:require('../../assets/home/热门/首页-热门_24.png'),
					name:'等你吃鸡',
					src2:require('../../assets/home/热门/首页-热门_31.png'),
					titles:'没有标题也很精彩',
					mar:'m-rights1 ml2'
				},
				{
					src1:require('../../assets/home/热门/首页-热门_26.png'),
					name:'垂钓小助手',
					src2:require('../../assets/home/热门/首页-热门_31.png'),
					titles:'没有标题也很精彩',
					mar:'m-rights1'
				},
				{
					src1:require('../../assets/home/热门/首页-热门_28.png'),
					name:'昙花一现',
					src2:require('../../assets/home/热门/首页-热门_31.png'),
					titles:'没有标题也很精彩',
					mar:'m-rights2'
				}
			]
		}
	},
	components:{
		thisLeftRight
	}
}
</script>

<style scoped>
.hot{
	text-align: left;
}
/*--------------首图片--------------*/
.hot img{
	width: 100%;
}
/*--------------球队--------------*/
.team{
	background-color: white;
	height: 94.5px;
	padding-top: 15px;
}
.group{
	width:49.7%;
	float: left;
	padding:0 14px;
	position: relative;
	padding:5px 0;
}
.group img{
	width: 21px;
	height: 19.5px;
	position: absolute;
	left:10%;
	top:20%;
}
.group p{
	margin: 0;
	position: relative;
	display: inline-block;
}
.group span{
	margin: 0;
	position: relative;
}
.p1{
	color:#858585;
	left:10%;
	font-size: 9px;
}
.s1{
	left:50%;
	color: #fa3c39;
	font-size: 11px;
}
.p2{
	color: #1f1f1f;
	left:25%;
	font-size: 15px;
}
.s2{
	left:47%;
	font-size: 15px;
}
.c1{
	color: #1F1F1F;
}
.c2{
	color: #8C8C8C;
}
.border1{
	border-right: 1px solid #8C8C8C;
}
.border2{
	border: none;
}
/*--------------快讯--------------*/
.mar{
	background-color:#f7f7f7;
	padding:9px 11.5px 10px 11.5px;
}
.quick{
	height: 79px;
	background-color: white;
}
.quick div{
	display: inline-block;
}
.quick img{
	width:60px;
	padding: 5px 6%;
	height: 33px;
	position: relative;
	top: 18px;
}
.quick span{
	font-size: 15px;
	color:#1e1e1e ;
	position: relative;
	top: 8px;
}
.quick-span{
	width:60.53%;
}

.player{
	width: 100%;
	height: 212px;
	position: relative;
	top: -11.5px;
	background-color: #f7f7f7;
	padding: 0px 0%;
}
.player-tet{
	height: 53px;
	width: 98%;
	position: relative;
	margin: 0 auto;
}
.tet-left{
	border-left: 2.5px solid #fac300;
	padding-left: 3px;
	display: inline-block;
	font-size: 14px;
	color: #1D1D1D;
	position: absolute;
	top: 30%;
	
}
.tet-right{
	font-size: 11px;
	display: inline-block;
	color: #8C8C8C;
	position: absolute;
	top: 30%;
	right: 11.5px;
}
.player-img{
	height:150px;
	display: inline-block;
}
.player-img-img{
	width: 30%;
	height: 150px;
	display: inline-block;
	background-color: white;
}
.ml2{ margin-left: 2%; }
.m-rights1{
	margin-right:3%;
}
.m-rights2{
	margin-right:0px;
}
.play-span1{
	font-size: 12px;
	color: #1d1d1d;
}
.play-img2{
	display: inline-block;
	position: relative;
	top: 2px;
}
.play-img2 img{
	width: 11.5px;
	height: 11.5px;
	
}
.play-span2{
	font-size: 10px;
	color: #8c8c8c;
}
</style>