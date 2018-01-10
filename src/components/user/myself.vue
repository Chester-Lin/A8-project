<template>
	<div>
		<div class="login">
			<div class="login-top">
				<a href="#" class="login-face"></a>
				<a class="login-item" @click="showDiaDialog()">点击登录</a>
				<a href="#" class="login-email"></a>
			</div>
			
			<div class="login-other">
				<ul class="login-icon">
					<li>
						<router-link :to="{path:'/goldCoin'}" class="login-img1"></router-link>
						<span id="login-span">1100</span>
					</li>
					<li>
						<router-link :to="{path:'/convert'}" class="login-img2"></router-link>
						<span>参与竞猜</span>
					</li>
					<li>
						<router-link :to="{path:'/task'}" class="login-img3"></router-link>
						<span>金币任务</span>		
					</li>
					<li><a href="#" class="login-img4"></a><span>礼品兑换</span></li>
				</ul>
			</div>
			<div class="login-zhibo">
				<div class="login-zhiboImg fl">
					<img src="../../assets/user/img/我_23.png" alt="" />
				</div>
				<span class="login-wenzi">我的直播</span>
				<a href="" class="login-dayu">&gt;</a>
			</div>
			<div class="login-balls">
				<div class="login-ballsMe">
					<div class="login-ballsImg fl">
						<img src="../../assets/user/img/我_26.png" alt="" />
					</div>
					<span class="login-wenzi">我关注的球队</span>
					<p>更多球队</p>
					<a href="" class="login-dayu">&gt;</a>
				</div>
				<div class="login-hr-me"></div>
				<div class="login-ballsYou">
					你还没有关注任何球队呢
				</div>
			</div>
			<div class="login-choose1">
				<ul>
					<li class="login-chooseLi" v-for="item in chooses1">
						<img :src="item.src" class="chooseImg fl" />
					    <span class="chooseSpan">{{ item.title }}</span>
						<p class="chooseP cl">{{ item.detail }}</p>
					</li>
				</ul>
			</div>
			<div class="login-choose2">
				<ul>
					<li class="login-chooseLi" v-for="item in chooses2">
						<img :src="item.src" alt="" class="chooseImg fl" />
					    <span class="chooseSpan">{{ item.title }}</span>
						<p class="chooseP cl">{{ item.detail }}</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="guess-footer"></div>
    	<this-dialog :isShow="showDiaDia" @on-close="hideDialog()"></this-dialog>
	</div>
</template>

<script>
import thisDialog from './dialog'
export default {
	data(){
		return{
			showDiaDia: false,
			chooses1: [
		        {
		          src: require('../../assets/user/img/我_28.png'),
		          title: '数据排行',
		          detail: '掌握各大球队数据资料'
		        },
		        {
		          src: require('../../assets/user/img/我_30.png'),
		          title: '我的预约',
		          detail: '精彩比赛不再错过'
		        },
		        {
		          src: require('../../assets/user/img/我_33.png'),
		          title: '设置',
		          detail: '定义个性化服务'
		        },
		        {
		          src: require('../../assets/user/img/我_34.png'),
		          title: '自定义',
		          detail: '定义更多高清播放路线'
		        },
		        {
		          src: require('../../assets/user/img/我_40.png'),
		          title: '意见反馈',
		          detail: '小A会及时给您答复'
		        },
		        {
		          src: require('../../assets/user/img/我_38.png'),
		          title: '分享我们',
		          detail: '谢谢您对我们的肯定'
		        }
			],
			chooses2: [
		        {
		          src: require('../../assets/user/img/我_44.png'),
		          title: '足球Q群',
		          detail: '624073460'
		        },
		        {
		          src: require('../../assets/user/img/我_47.png'),
		          title: '篮球Q群',
		          detail: '603931936'
		        },
		        {
		          src: require('../../assets/user/img/我_52.png'),
		          title: '竞彩Q群',
		          detail: '561892328'
		        },
		        {
		          src: require('../../assets/user/img/我_51.png'),
		          title: '加入直播线路群',
		          detail: '374537837'
		        }
			]
		}
	},
	methods: {
		showDiaDialog(){
			this.showDiaDia = true;
		},
		hideDialog(){
			this.showDiaDia = false;
		}
	},
	components:{
		thisDialog
	}
}
</script>

<style scoped>
.login-other{
	margin-top: -12px;
	margin-left: 18.5px;
	background-color: #ffffff;
	width: 337.5px;
	height: 66.5px;
	box-shadow: 0 5px 5px 2.5px #A09FA0;
}
.login-icon{
	list-style-type: none;
	float: left;
	padding-left: 50px;
	padding-top: 12px;
}
.login-icon li{
	float: left;
	text-align: center;
}
.login-icon span{
	display: block;
	float: left;
	color: #060606;
	font-size: 9px;
	text-align: center;
	margin-left: 25px;
	margin-top:5px;
}
#login-span{
	margin-left: -0.5px;
}
.login-icon a{
	display: block;
}
.login-img1{
	display: block;
	width: 26px;
	height: 26px;
	background-image: url("../../assets/user/img/我_10.png");
	background-size: 26px 26px;
	background-position: -1.5px 0.5px;
}
.login-img2{
	display: block;
	width: 26px;
	height: 26px;
	background-image: url("../../assets/user/img/我_12.png");
	background-size: 26px 26px;
	background-position: -1.5px 0.5px;
	margin-left: 36px;
}
.login-img3{
	display: block;
	width: 26px;
	height: 26px;
	background-image: url("../../assets/user/img/我_14.png");
	background-size: 26px 26px;
	background-position: -1.5px 0.5px;
	margin-left: 36px;
}
.login-img4{
	display: block;
	width: 26px;
	height: 26px;
	background-image: url("../../assets/user/img/我_16.png");
	background-size: 26px 26px;
	background-position: -1.5px 0.5px;
	margin-left: 36px;
}	
	
	
	
	
.fl{
	float: left;
}
.cl{
	clear: both;
}
.login{
	background-color: #F7F4F6;]
	text-align: left;
}
.login-top{
	width: 375px;
	height: 119.5px;
	background-color:#282828;
}
.login-face{
	display:block;
	width: 63px;
	height:60px;
	position: absolute;
	top: 23.5px;
	left: 38px;
	background-image: url("../../assets/user/img/我_03.png");
	background-size: 63px 60px;

}
.login-item{
	text-decoration: none;
	color: #fefefe;
	font-size: 15px;
	position: absolute;
	top: 47.5px;
	left:115px;
}
.login-email{
	display: block;
	width: 27.5px;
	height: 24px;
	background-image: url("../../assets/user/img/我_05.png"); 
	background-size: 27px 24.5px;
	position: absolute;
	top:41px;
	left: 313.5px;
}
.login-zhibo{
	margin-top: 12px;
	width: 375px;
	height: 46px;
	background-color: #ffffff;
	position: relative;
}
.login-zhiboImg img{
	height: 10.5px;
	width: 16px;
	margin-left: 13.5px;
	padding-top: 17.75px;
}
.login-wenzi{
	color: #404440;
	font-size: 9px;
}
.login-zhibo span{
	position: absolute;
	top: 15px;
	left: 40px;
}
.login-zhibo a{
	position: absolute;
	top: 10px;
	left: 345px;
}
.login-dayu{
	display: block;
	text-decoration: none;
}
.login-balls{
	width: 375px;
	height: 92.5px;
	margin-top: 8px;
	background-color: #ffffff;
	position: relative;
}
.login-ballsMe{
	height:30px;
	line-height: 30px;
}
.login-ballsImg img{
	width: 14px;
	height: 13.5px;
	margin-left: 13.5px;
	padding-top: 5px;
}
.login-ballsMe span{
	position:absolute;
	top: 0px;
	left: 40px;
}
.login-ballsMe p{
	font-size: 9px;
	color: #aaaaaa;
	position: absolute;
	top: 0px;
	left: 280px;
}
.login-ballsMe a{
	position: absolute;
	top:0px;
	left: 345px;
}
.login-hr-me{
	width: 335px;
	height: 0.5px;
	background-color: #F7F4F8;
	margin-left: 10px;
}
.login-ballsYou{
	text-align: center;
	line-height: 62.5px;
	height: 62.5px;
	font-size: 12px;
	color: #a9a9a9;
}
.login-choose1{
	width: 375px;
	height: 181.5px;
	margin-top: 8px;
	background-color: #ffffff;
}
.login-choose1 ul,
.login-choose2 ul{
	list-style-type: none;
}
.chooseImg{
	width: 26px;
	height: 26px;
	margin-left: 16px;
	margin-top: 5px;
}
.login-chooseLi{
	float: left;
	width: 50%;
	height: 60px;
	position: relative;
}
.chooseSpan{
	font-size: 12px;
	color: #545454;
	position: absolute;
	top: 10px;
	left: 45px;
}
.chooseP{
	font-size: 9px;
	color: #959595;
	margin-left: 16px;
	text-align: left;
}
.login-choose2{
	width: 375px;
	height: 121px;
	background-color: white;
	margin-top: 8px;
}
.guess-footer{
	width: 375px;
	height: 100px;
	background-color: #ffffff;
}
</style>