<template>
	<div>
		<div class="bigimg" v-for="big in bigs">
			<img :src="big.src1" class="big"/>
			<div class="buttoms">
				<span class="t1">{{big.span1}}</span>
				<span class="t2">{{big.span2}}</span>
				<img :src="big.src2"/>
				<span class="t3">{{big.span3}}</span>
				<img :src="big.src3"/>
				<span class="t3">{{big.span4}}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	props:{
		bigs:{
			type:Array,
			default:[
				{
					src1:require('../../assets/home/专题/专题_13.png'),
					span1:'体育秀场',
					span2:'8小时前',
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
.big{
	width: 100%;
}
.bigimg{
	padding: 5px 10px;
}
.buttoms{
	border-bottom: 1px solid #dedede;
	line-height: 34px;
	margin-bottom:10.5px;
}
.buttoms img{
	width: 12px;
	margin-top: 3px;
	text-align: left;
}
.t1{
	background-color: #f7c600;
	color: #fcfdf3;
	font-size:9px;
	padding: 2px 10px;
}
.t2{
	color: #b0b0b0;
	font-size: 12px;
}
.t3{
	font-size: 11px;
	color: #B0B0B0;
}
</style>