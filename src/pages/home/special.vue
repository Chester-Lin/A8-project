<template>
	<div class="special">
		<div class="title" >
			<div class="div-img" v-for="img in titles">
				<img :src="img.src"/>
				<span>{{img.txt}}</span>
			</div>
			<div class="cycle">
				<span class="span1"></span>
				<span class="s"></span>
				<span class="s"></span>
				<span class="s"></span>
			</div>
		</div>
		<div class="mar"></div>
		<div class="new">
			<span class="new-update">最近更新</span><br />
			<span class="new-english">NEW</span>
		</div>
		<this-bigimg :bigs="bigs1"></this-bigimg>
		<this-left-right :leftandright="leandri1"></this-left-right>
		<this-bigimg :bigs="bigs2"></this-bigimg>
		<this-left-right :leftandright="leandri2"></this-left-right>
	</div>
</template>

<script>
import thisBigimg from '../../components/home/bigimg.vue'
import thisLeftRight from '../../components/home/leftandright'
export default{
	data(){
		return {
			titles:[
				{
					src:require('../../assets/home/专题/专题_03.png'),
					txt:'篮球实战教学'
				},
				{
					src:require('../../assets/home/专题/专题_05.png'),
					txt:'模仿帝'
				},
				{
					src:require('../../assets/home/专题/专题_07.png'),
					txt:'脚踝终结者'
				},
			],
			bigs1:[
				{
					src1:require('../../assets/home/专题/专题_13.png'),
					span1:'体育秀场',
					span2:'8小时前',
					src2:require('../../assets/public/竞猜_06.png'),
					span3:800,
					src3:require('../../assets/public/竞猜_08.png'),
					span4:4
				}
			],
			leandri1:[
				{
					src1:require('../../assets/home/专题/专题_16.png'),
					span1:'狗哥看盘',
					have:"t1",
					titles:'国际友谊赛,冰岛以和为贵！',
					span2:'竞彩',
					times:'1小时前',
					src2:require('../../assets/public/竞猜_06.png'),
					span3:469,
					src3:require('../../assets/public/竞猜_08.png'),
					span4:0
				},
				{
					src1:require('../../assets/home/专题/专题_19.png'),
					span1:'一壶米',
					have:"t1",
					titles:'周三009:目标坚定 桑托斯上“马”取分',
					span2:'竞彩',
					times:'1小时前',
					src2:require('../../assets/public/竞猜_06.png'),
					span3:699,
					src3:require('../../assets/public/竞猜_08.png'),
					span4:0
				},
				{
					src1:require('../../assets/home/专题/专题_21.png'),
					span1:'活动专区',
					have:"t1",
					titles:'开奖公告:现金大奖究竟花落谁家,5位幸运儿已经诞生',
					span2:'竞彩',
					times:'1小时前',
					src2:require('../../assets/public/竞猜_06.png'),
					span3:890,
					src3:require('../../assets/public/竞猜_08.png'),
					span4:9
				}
			],
			bigs2:[
				{
					src1:require('../../assets/home/专题/专题_23.png'),
					span1:'天下足球',
					span2:'昨天07:29',
					src2:require('../../assets/public/竞猜_06.png'),
					span3:755,
					src3:require('../../assets/public/竞猜_08.png'),
					span4:9
				},
				{
					src1:require('../../assets/home/专题/专题_25.png'),
					span1:'天下足球',
					span2:'昨天09:15',
					src2:require('../../assets/public/竞猜_06.png'),
					span3:889,
					src3:require('../../assets/public/竞猜_08.png'),
					span4:50
				}
			],
			leandri2:[
				{
					src1:require('../../assets/home/专题/专题_27.png'),
					span1:'NBA巡礼',
					have:"t1",
					titles:'掘金篇:米尔赛普来投  锋线崛起',
					times:'5小时前',
					src2:require('../../assets/public/竞猜_06.png'),
					span3:200,
					src3:require('../../assets/public/竞猜_08.png'),
					span4:9
				},
				{
					src1:require('../../assets/home/专题/专题_30.png'),
					span1:'翻译官',
					have:"t1",
					titles:'射手本色:莱万多夫斯基的足球之路（下）',
					span2:'深度',
					times:'5小时前',
					src2:require('../../assets/public/竞猜_06.png'),
					span3:280,
					src3:require('../../assets/public/竞猜_08.png'),
					span4:11
				},
				{
					src1:require('../../assets/home/专题/专题_32.png'),
					span1:'复盘',
					have:"t1",
					titles:'枪手战蓝月亮:同传控足球不同流派的碰撞',
					span2:'深度',
					times:'6小时前',
					src2:require('../../assets/public/竞猜_06.png'),
					span3:375,
					src3:require('../../assets/public/竞猜_08.png'),
					span4:96
				}
			],
		}
	},
	components:{
		thisBigimg,
		thisLeftRight
	}
}
</script>

<style scoped>
.special{
	text-align: left;
}
.title{
	width: 100%;
	height: 120px;
}
.div-img{
	border: 1px solid #d2d2d2;
	width: 29.23%;
	height:88.5px;
	margin:5px 1.5%;
	display:inline-block;
}
.div-img img{
	width: 100%;
	height: 65px;
}
.div-img span{
	color: #1d201f;
	display: inline-block;
	width: 100%;
	font-size: 12px;
	text-align: center;
}
.cycle{
	text-align: center;
}
.cycle span{
	text-align: center;
	display: inline-block;
	width: 6px;
	height: 6px;
	border-radius:3px;
}
.span1{
	background-color: #202020;
}
.s{
	background-color: #dedede;
}
.mar{
	width: 100%;
	height: 6.5px;
	background-color: #DEDEDE;
}

.new{
	width: 100%;
	height: 59.5px;
	line-height:29.5px;
	text-align: center;
}
.new span{
	display: inline-block;
}
.new-update{
	color:#202020;
	width:128px;
	font-size: 15px;
	text-align: center;
	border-bottom: 1px solid #202020;
} 
.new-english{
	color: #f23a28;
	width:128px;
	font-size: 12px;
	text-align: center;
}
</style>