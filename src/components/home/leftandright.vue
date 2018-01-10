<template>
	<div>
		<div id="videos"  v-for="landr in leftandright">
			<div class="left">
				<img :src="landr.src1" class="left-img"/>
			</div>
			<div class="right">
				<div class="right-up">
					<span :class="landr.have">{{landr.span1}}</span>
					<span class="titles">{{landr.titles}}</span><br />
				</div>
				<div class="right-down">
					<span class="t2">{{landr.span2}}</span>
					<span class="t3">{{landr.times}}</span>
					<span class="tops">{{landr.top}}</span>
					<img :src="landr.src2"/>
					<span class="t4">{{landr.span3}}</span>
					<img :src="landr.src3"/>
					<span class="t4">{{landr.span4}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	props:{
		leftandright:{
			type:Array,
			default:[
				{
					src1:require('../../assets/home/专题/专题_16.png'),
					span1:'狗哥看盘',
					have:"t1",
					titles:'国际友谊赛,冰岛以和为贵！',
					span2:'竞彩',
					times:'1小时前',
					top:"置顶",
					src2:require('../../assets/public/竞猜_06.png'),
					span3:800,
					src3:require('../../assets/public/竞猜_08.png'),
					span4:4
				}
			]
		}
	}
}
</script>

<style scoped>

#videos{
	height:70px;
	border-bottom: 1px solid #dedede;
	margin-bottom: 11.5px;
	text-align: left;
	padding: 5px 10px;
}
.left{
	width: 29.33%;
	height: 59px;
	float: left;
}
.left-img{
	width: 100%;
}
.right{
	width:62.67%;
	height: 59px;
	float: left;
	margin-left: 10px;
}
.t1{
	background-color: #f7c600;
	color: #fcfdf3;
	font-size:9px;
	padding:2px 10px;
}
.titles{
	font-size: 15px;
	color: #202020;
}
.t2{
	color: #09a5cb;
	font-size: 12px;
}
.tops{
	color: #f93d39;
	font-size: 12px;
}
.t3{
	color: #949494;
	font-size: 12px;
}
.t4{
	color: #949494;
	font-size: 11px;
}
.right img{
	width: 12px;
	margin-top: 2px;
}
.right-up{
	height: 36px;
}
</style>