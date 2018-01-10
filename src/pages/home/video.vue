<template>
	<div class="video">
		<div v-for="video in videos" class="video-group">
    		<img :src="video.src1" class="img"/>
    		<div class="infos">
    			<span class="time">{{video.time}}</span>
				<span class="img1"><img :src="video.src2"/></span>
				<span class="number">{{video.pnum}}</span> 			
				<span class="img2"><img :src="video.src3"/></span>
				<span class="number">{{video.info}}</span>    			
    		</div>
    	</div>
    </div>
</template>

<script>

export default{
	data(){
		return {
			videos:[
				{
					src1:require('../../assets/home/视频/视频_03.png'),
					time:'半小时前',
					src2:require('../../assets/public/竞猜_06.png'),
					pnum:273,
					src3:require('../../assets/public/竞猜_08.png'),
					info:0
				},
				{
					src1:require('../../assets/home/视频/视频_06.png'),
					time:'半小时前',
					src2:require('../../assets/public/竞猜_06.png'),
					pnum:196,
					src3:require('../../assets/public/竞猜_08.png'),
					info:8
				},
				{
					src1:require('../../assets/home/视频/视频_08.png'),
					time:'半小时前',
					src2:require('../../assets/public/竞猜_06.png'),
					pnum:299,
					src3:require('../../assets/public/竞猜_08.png'),
					info:1
				},
				{
					src1:require('../../assets/home/视频/视频_10.png'),
					time:'一小时前',
					src2:require('../../assets/public/竞猜_06.png'),
					pnum:273,
					src3:require('../../assets/public/竞猜_08.png'),
					info:1
				},
				{
					src1:require('../../assets/home/视频/视频_12.png'),
					time:'一小时前',
					src2:require('../../assets/public/竞猜_06.png'),
					pnum:199,
					src3:require('../../assets/public/竞猜_08.png'),
					info:5
				},
				{
					src1:require('../../assets/home/视频/视频_14.png'),
					time:'二小时前',
					src2:require('../../assets/public/竞猜_06.png'),
					pnum:333,
					src3:require('../../assets/public/竞猜_08.png'),
					info:1
				}
			]
		}
	},
	components:{

	}
}
</script>

<style scoped>
.video-group{
	border-bottom:2px solid #eeeeee;
	margin:0 12px 17px 12px;
	text-align: left;
}
.infos{
	margin-top:13.5px;
	width: 100%;
	margin-bottom:12px;
	/*text-align: center;*/
}
.infos,.video-group{
	display:inline-block;
}
.img{
	width: 100%;
}
.time{
	color: #8c8c8c;
	font-size: 12px;
}
.img1 img{
	width:11px;
	height:11px;
}
.number{
	color: #8C8C8C;
	font-size: 12px;
}
.img2 img{
	width:12px;
	height:11px;
}
</style>