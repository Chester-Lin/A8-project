<template>
	<div>
		<div class="login-money">
			<div class="money-top">
				<img src="../../../assets/user/image/返回统一.png" alt="" @click="goBack"/>
				<span>金币明细</span>
			</div>
			<div class="money-ul">
				<ul>
					<li class="moneyLi bgcolor1">日期</li>
					<li class="moneyLi bgcolor2">操作</li>
					<li class="moneyLi bgcolor3">变更</li>
					<li class="moneyLi bgcolor4">剩余</li>
				</ul>
			</div>
			<div class="moneyUl1">
				<ul>
					<li>12:33<span class="money-span">今天</span></li>
					<li>任务</li>
					<li>+1000</li>
					<li id="money-color1">1100</li>
				</ul>
			</div>
			<div class="moneyUl2">
				<ul>
					<li>15:39<span class="money-span">昨天</span></li>
					<li>新用户</li>
					<li>+100</li>
					<li id="money-color2">100</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods:{
			goBack(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
.money-top{
	width: 375px;
	height: 66px;
	background-color: white;
	position: relative;
}
.money-top img{
	width: 14.5px;
	height: 26px;
	margin-top: 20.5px;
	margin-left: 20px;
	float: left;
}
.money-top span{
	position:absolute;
	top: 27.5px;
	left: 165px;
	font-size: 14px;
	color: #a7a7a7;
}
.money-ul ul{
	list-style-type: none;
	width: 375px;
}
.moneyLi{
	display: block;
	width: 49px;
	text-align: center;
	line-height: 49px;
	width: 25%;
	float: left;
	font-size: 15px;
}
.bgcolor1{
	background-color:#ea6200;
	color: #ede2de;
}
.bgcolor2{
	background-color:#83cdc9;
	color: #d2e1df;
}
.bgcolor3{
	background-color:#00a1e7;
	color: #e1ecd7;
}
.bgcolor4{
	background-color:#f09148;
	color: #f9f2f4;
}
.moneyUl1 ul,
.moneyUl2 ul{
	list-style-type: none;
	width: 375px;
	clear: both;
}
#money-color1,
#money-color2{
	color: #ff1545;
}
.moneyUl1 li,
.moneyUl2 li{
	display: block;
	width: 93.5px;
	height: 50px;
	box-sizing: border-box;
	border: 1.5px solid #6f6f6f;
	float: left;
	text-align: center;
	line-height: 50px;
	font-size: 15px;
	color: #6f6f6f;
	position: relative;
}
.money-span{
	display: block;
	font-size: 9px;
	position: absolute;
	top: 15px;
	left: 35px;
}
</style>