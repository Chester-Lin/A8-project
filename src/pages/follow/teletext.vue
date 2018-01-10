<template>
	<div>
		<div class="attention" v-for="atten in attentions">
			<div class="text" :class="atten.class1">
				<span>{{atten.span1}}</span>
			</div>
			<div class="picture">
				<this-group :group="group1"></this-group>
			</div>
		</div>
		<div class="attention" v-for="atten in attentions">
			<div class="text" :class="atten.class2">
				<span>{{atten.span2}}</span>
			</div>
			<div class="picture">
				<this-group :group="group2"></this-group>
			</div>
		</div>
	</div>
</template>

<script>
import thisGroup from './groups'
export default{
	components:{
		thisGroup
	},
	data(){
		return {
			attentions:[
				{	
					span1:'·热门篮球球队点击关注',
					span2:'·热门足球球队点击关注',
					class1:'c1',
					class2:'c2'
				}
			],
			group1:[
				{
					src:require('../../assets/attention/关注_03.png'),
					texts:'勇士',
					classs:'text1'
				},
				{
					src:require('../../assets/attention/关注_11.png'),
					texts:'骑士',
					classs:'text1'
				},
				{
					src:require('../../assets/attention/关注_05.png'),
					texts:'火箭',
					classs:'text1'
				},
				{
					src:require('../../assets/attention/关注_14.png'),
					texts:'雷霆',
					classs:'text1'
				},
				{
					src:require('../../assets/attention/关注_08.png'),
					texts:'马刺',
					classs:'text1'
				},
				{
					src:require('../../assets/attention/关注_26.png'),
					texts:'湖人',
					classs:'text1'
				},
				{
					src:require('../../assets/attention/关注_21.png'),
					texts:'快船',
					classs:'text1'
				},
				{
					src:require('../../assets/attention/关注_23.png'),
					texts:'公牛',
					classs:'text1'
				},
				{
					src:require('../../assets/attention/关注_25.png'),
					texts:'热火',
					classs:'text1'
				},
				{
					src:require('../../assets/attention/关注_28.png'),
					texts:'猛龙',
					classs:'text1'
				}
			],
			group2:[
				{
					src:require('../../assets/attention/关注_35.png'),
					texts:'皇家马…',
					classs:'text2'
				},
				{
					src:require('../../assets/attention/关注_43.png'),
					texts:'巴塞罗那',
					classs:'text2'
				},
				{
					src:require('../../assets/attention/关注_38.png'),
					texts:'曼联',
					classs:'text2'
				},
				{
					src:require('../../assets/attention/关注_41.png'),
					texts:'广州恒大',
					classs:'text2'
				},
				{
					src:require('../../assets/attention/关注_46.png'),
					texts:'拜仁慕…',
					classs:'text2'
				},
				{
					src:require('../../assets/attention/关注_56.png'),
					texts:'阿森纳',
					classs:'text2'
				},
				{
					src:require('../../assets/attention/关注_53.png'),
					texts:'切尔西',
					classs:'text2'
				},
				{
					src:require('../../assets/attention/关注_59.png'),
					texts:'曼城',
					classs:'text2'
				},
				{
					src:require('../../assets/attention/关注_62.png'),
					texts:'马德里…',
					classs:'text2'
				},
				{
					src:require('../../assets/attention/关注_65.png'),
					texts:'利物浦',
					classs:'text2'
				}
			]
		}
	}
}
</script>
<style scoped>
.attention{
}
.text{
	background-color: #f2f2f2;
	color: #A7A7A7;
	font-size: 14px;
	width: 100%;
}
.text span{
	position: relative;
	left: 6%;
}
.text1{
	height: 28.5px;
	line-height: 28.5px;
}
.picture{
	height: 195px;
}
.picture-group{
	width: 7.2%;
	height:47px;
}
.c1{
	height: 28.5px;
	line-height: 28.5px;
}
.c2{
	height: 31px;
	line-height: 31px;
}
</style>