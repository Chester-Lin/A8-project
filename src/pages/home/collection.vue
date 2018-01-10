<template>
	<div class="collection">
		<div v-for="picture in collection" class="collection-group">
    		<img :src="picture.src"/>
    		<span>{{picture.title}}</span>
    	</div>
	</div>
</template>

<script>

export default{
	data(){
		return {
			collection:[
				{
					src:require('../../assets/home/集锦/集锦_07.png'),
					title:'利拉德状态不佳麦科勒姆失绝杀 灰熊98-97开拓者'
				},
				{
					src:require('../../assets/home/集锦/集锦_09.png'),
					title:'兰多夫18+8威少20+12国王主场逆转雷霆止住7连败'
				},
				{
					src:require('../../assets/home/集锦/集锦_11.png'),
					title:'约基奇得分新高41+12掘金主场112-104撕破篮网'
				},
				{
					src:require('../../assets/home/集锦/集锦_13.png'),
					title:'内线失守快船遭遇连败 阿德25分助马刺三连胜'
				},
				{
					src:require('../../assets/home/集锦/集锦_15.png'),
					title:'波神28分连进关键球实现逆转 黄蜂113-118尼克斯'
				},
				{
					src:require('../../assets/home/集锦/集锦_17.png'),
					title:'德罗赞24分瓦兰21+10波蒂斯21+13猛龙险胜公牛'
				}
			]
		}
	},
	components:{

	}
}
</script>

<style scoped>
.collection{
	text-align: left;
}	
.collection-group{
	border-bottom: 2px solid #eeeeee;
	margin:0 12px 17px 12px;
}
.collection-group img{
	width: 100%;
}
.collection-group span{
	font-size: 14px;
	color: #1E1E1E;
	display: inline-block;
	width:100%;
	padding:10px 0;
}
</style>