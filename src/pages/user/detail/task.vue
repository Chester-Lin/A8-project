<template>
	<div>
		<div class="login-task">
			<div class="task-top">
				<img src="../../../assets/user/image/返回统一.png" @click="goBack"/>
				<span>金币任务</span>
				<p>指南</p>
			</div>
			<div class="task-img">
				<img src="../../../assets/user/image/money/圆弧.png"/>
			</div>
			<span class="task-span task-position">签到任务</span>
			<div class="task-qiandao">
				<ul>
					<li style="margin-left: 19px;"><img src="../../../assets/user/image/money/链接3_03.png" alt="" /></li>
					<li><img src="../../../assets/user/image/money/链接3_03.png"/></li>
					<li><img src="../../../assets/user/image/money/链接3_03.png"/></li>
				</ul>
				<div>
					<a href="javascript:void(0)" class="task-wenzi">签到</a>
					<span class="task-date">已连续签到0天</span>
				</div>
			</div>
			<div style="clear: both;">
			<span class="task-span task-position1">每日任务</span>
			<div class="task-news">
				<div class="news-img">
					<img src="../../../assets/user/image/money/链接3_07.png" alt="" />
				</div>
				<div class="task-news1">
					<p class="news1-p">每日阅读新闻</p>
					<span class="news1-span">(0/3)</span>
					<span class="news1-span1">+50</span>
					<img src="../../../assets/user/image/money/链接3_09.png" alt="" class="news1-img" />
				</div>
				<div class="task-news2">
					<p class="news1-p">每日观看视频</p>
					<span class="news1-span">(0/3)</span>
					<span class="news1-span1">+50</span>
					<img src="../../../assets/user/image/money/链接3_09.png" alt="" class="news1-img" />
				</div>
				<div class="task-news3">
					<p class="news1-p">每日参与竞猜</p>
					<span class="news1-span">(0/1)</span>
					<span class="news1-span1">+50</span>
					<img src="../../../assets/user/image/money/链接3_09.png" alt="" class="news1-img" />
				</div>
				<div class="task-news4">
					<p class="news1-p">每日分享新闻</p>
					<span class="news1-span">(0/1)</span>
					<span class="news2-span1">+150</span>
					<img src="../../../assets/user/image/money/链接3_09.png" alt="" class="news1-img" />
				</div>
				<div class="task-news5">
					<p class="news1-p">每日分享比赛</p>
					<span class="news1-span">(0/1)</span>
					<span class="news2-span1">+150</span>
					<img src="../../../assets/user/image/money/链接3_09.png" alt="" class="news1-img" />
				</div>
				<div class="task-news6">
					<p class="news1-p">每日分享视频</p>
					<span class="news1-span">(0/1)</span>
					<span class="news2-span1">+150</span>
					<img src="../../../assets/user/image/money/链接3_09.png" alt="" class="news1-img" />
				</div>
				<div class="task-news7">
					<p class="news1-p">评论上热门</p>
					<span class="news1-span">(0/1)</span>
					<span class="news2-span1">+200</span>
					<img src="../../../assets/user/image/money/链接3_09.png" alt="" class="news1-img" />
				</div>
				<div class="task-news8">
					<p class="news1-p">每天分享快讯</p>
					<span class="news1-span">(0/1)</span>
					<span class="news2-span1">+150</span>
					<img src="../../../assets/user/image/money/链接3_09.png" alt="" class="news1-img" />
				</div>
			</div>
			<span class="task-span task-position1">进阶任务</span>
			<div class="task-dingyue">
				<div class="book-img">
					<img src="" alt="" />
				</div>
				<div class="task-dingyue1">
					<p class="news1-p">关注订阅号</p>
					<span class="news1-span">(0/1)</span>
					<a href="" class="dingyue-guanzhu">一键关注</a>
					<span class="dingyue-span1">+1000</span>
					<img src="../../../assets/user/image/money/链接3_09.png" alt="" class="news1-img" />
				</div>
				<div class="task-dingyue2">
					<p class="news1-p">关注球队(1/1)</p>
					<img src="../../../assets/user/image/money/链接3_14.png" alt="" class="dingyue-img" />
				</div>
			</div>	
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
*{
	border: 0;
	padding: 0;
	margin: 0;
}

.login-task{
	background-color: #f7f4f6;
}
span{text-align: left;}
.task-top{
	width: 375px;
	height: 50px;
	border-bottom: solid 1px #cccccc;
	background-color: #ffffff;
	position: relative;
}
.task-top img{
	width: 13px;
	height: 23px;
	margin-top: 15px;
	margin-left: 25px;
	float: left;
}
.task-top span{
	color: #7f7f7f;
	font-size: 18px;
	position: absolute;
	top: 17.5px;
	left: 158px;
}
.task-top p{
	color: #424242;
	font-size: 12px;
	position:absolute;
	right: 39px;
	top: 20px;
}
.task-img{
	width: 375px;
	height: 165.5px;
	background-color: white;
}
.task-img img{
	
	width: 193.5px;
	height: 150.5;
}
.task-span{
	display:block;
	color: #adacad;
	font-size: 18px;
	margin-top: 9.5px;
}
.task-position{
	margin-left: 5.5px;
}
.task-position1{
	margin-left: 9.5px;
}
.task-qiandao{
	background-color: #ffffff;
	width: 375px;
	height: 107.5px;
	margin-top: 10px;
	position: relative;
}
.task-qiandao ul{
	list-style-type: none;
}
.task-qiandao li{
	float: left;
	margin-top: 33.5px;
	margin-left: 20.5px;
}
.task-qiandao img{
	width: 45px;
	height: 45px; 
}
.task-wenzi{
	text-decoration: none;
	color: white;
	font-size: 18px;
	width: 100px;
	height: 31.5px;
	background-color: #fdcc00;
	border-radius: 5px;
	text-align: center;
	line-height: 31.5px;
	position: absolute;
	top: 38.5px;
	right: 32px;
}
.task-date{
	display: block;
	position: absolute;
	top: 83px;
	right: 55px;
	font-size: 12px;
	color: #adacad;
}
.task-news{
	background-color: #ffffff;
	width: 375px;
	margin-top: 10px;
	position: relative;
	height: 400px;
	overflow: hidden;
}
.news-img img{
	margin-top: 9.5px;
	margin-left: 12.5px;
	width: 20px;
	height: 400px;
	float: left;
}
.task-news1{
	position: absolute;
	top: 10.5px;
	left: 40px;
}
.task-news2{
	position: absolute;
	top: 60px;
	left: 40px;
}
.task-news3{
	position: absolute;
	top: 110px;
	left: 40px;
}
.task-news4{
	position: absolute;
	top: 160px;
	left: 40px;
}
.task-news5{
	position: absolute;
	top: 210px;
	left: 40px;
}
.task-news6{
	position: absolute;
	top: 260px;
	left: 40px;
}
.task-news7{
	position: absolute;
	top: 310px;
	left: 40px;
}
.task-news8{
	position: absolute;
	top: 360px;
	left: 40px;
}
.news1-p{
	color: #000000;
	font-size: 7.5px;
}
.news1-span{
	color: #acabac;
	font-size: 15px;
	position: absolute;
	top: 0px;
	left: 90px;
}
.news1-span1{
	color: #acabac;
	font-size: 15px;
	position: absolute;
	top: 0px;
	left: 260px;
}
.news2-span1{
	color: #acabac;
	font-size: 15px;
	position: absolute;
	top: 0px;
	left: 250px;
}
.news1-img{
	position: absolute;
	top: 1px;
	left: 288px;
}
.task-dingyue{
	width: 375px;
	background-color: #ffffff;
	margin-top: 10px;
	margin-bottom: 55.5px;
	position: relative;
	height: 150px;
}
.task-dingyue1{
	position: absolute;
	top: 36px;
	left: 40px;
}
.task-dingyue2{
	position: absolute;
	top: 72px;
	left: 40px;
}
.dingyue-span1{
	color: #acabac;
	font-size: 15px;
	position: absolute;
	top: 0px;
	left: 240px;
}
.dingyue-guanzhu{
	text-decoration: none;
	color: #acabac;
	text-align: center;
	line-height: 20px;
	border: 1.5px solid #EFECEE;
	width: 64px;
	height: 20px;
	font-size: 13px;
	position: absolute;
	top: 0px;
	left: 130px;
}
.dingyue-img{
	position: absolute;
	top: 0px;
	left: 215px;
	width: 90px;
	height: 38px;
}	
</style>