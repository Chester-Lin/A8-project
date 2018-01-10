<template>
	<div>
		<div class="hot">
			<span class="title">{{selections.title}}</span><br>
			<div class="sm-pic fl">
				<div class="fa-sm-pic">
					<img :src="selections.smallpic1" class="fl"/>
					<span class="hot-font1 fl">{{selections.first}}</span>
				</div>
				<div class="fa-sm-pic">
					<img :src="selections.smallpic2" class="fl"/>
					<span class="hot-font1 fl">{{selections.second}}</span>
				</div>
			</div>
			<div class="sm-min-text fl">
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
					title:'CBA',
					smallpic1:require('../../assets/game/hot/热门_18.png'),
					smallpic2:require('../../assets/game/hot/热门_21.png'),
					first:'福建',
					second:'天津',
					time:'19:35进行',
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
	width: 100%;
	text-align: left;
}
.hot{
	padding: 8px 10px;
	border-bottom: 1px solid #DEDEDE;
	background: #FFFFFF;
}
.hot-font1{
	font-size: 15px;
	margin-left:5px ;
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
.fa-sm-pic{
	padding: 15px 0;
}
.sm-pic{
	width: 90px;
}
.sm-pic img{
	width: 24px;
}
.sm-min-text{
	width: 130px;
	text-align: center;
	padding: 26px 20px;
	height: 30px;
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