<template>
	<div class="group">
		<div class="img-text-group" v-for="pt in group">
			<div class="img">
				<img :src="pt.src"/>
			</div>
			<div :class="pt.classs" class="text">
				{{pt.texts}}
			</div>
		</div>
	</div>
</template>

<script>
export default{
	props:{
		group:{
			type:Array,
			default:[
				{	
					src:require('../../assets/attention/关注_03.png'),
					texts:'勇士',
					classs:'text1'
				}
			]
		}
	}
}
</script>

<style scoped>
.group{
	height: 196px;
}	
.img-text-group{
	width: 12.2%;
	height:70px;
	display: inline-block;
	margin:13px 3% 0 4%;
}
.img{
	width:100%;
	height:52px;
}
img{
	width: 100%;
	
}
.group .text{
	text-align: center;
}
.text1{
	font-size:12px;
	color: #161616;
	text-align: center;
}
.text2{
	font-size:8px;
	color: #727272;
	text-align: center;
}
</style>