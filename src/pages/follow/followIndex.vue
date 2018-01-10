<template>
	<div class="attention">
		<div class="attention-header">
			<div class="attention-header-left"></div>
			<div class="attention-header-right">
				无关注，不精彩！
			</div>
		</div>
		<this-list></this-list>
		<div class="attention-more">
			<div>
				关注更多球队
			</div>
		</div>
	</div>
</template>

<script>
import thisList from './teletext'
export default{
	components:{
		thisList
	}
}
</script>

<style scoped>
.attention{
	margin: 0;
	padding: 0;
	border: 0;
	background-color: white;
	text-align: left;
}
.attention-header{
	padding:5px;
	height: 72.5px;
}
.attention-header-left{
	width: 30px;
	height: 30px;
	display: inline-block;
	border-radius: 15px;
	background-color:#dddddd;
	position: relative;
	top:19px;
	left:2.5%;
	margin-right:3.7%;
}
.attention-header-right{
	display: inline-block;
	font-size: 14px;
	color: #a7a7a7;
	position: relative;
	top: 8px;
}
.attention-more{
	height: 122px;
	padding:5px;
	background-color: #f2f2f2;
	text-align: center;
}
.attention-more div{
	font-size: 15px;
	color: #212121;
	line-height: 28.5px;
	display: inline-block;
	border: 1px solid black;
	width: 40.67%;
	text-align: center;
	margin-top: 20px;
	border-radius:5px;
	top:31.5px;
}
</style>