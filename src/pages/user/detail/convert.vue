<template>
	<div>
		<div class="guess">
			<div class="guess-top">
				<img src="../../../assets/user/image/返回统一.png" alt="" @click="goBack"/>
				<span>竞猜</span>
				<small>已参与</small>
			</div>
			<div class="guess-vs">
				<ul>
					<li class="guess-vsLi">
						<img src="../../../assets/user/image/guess/链接2_06.png" alt="" />
						<span>活塞</span>
					</li>
					<li class="guess-vsLi1">
						<div class="VS">
							<h2>NBA</h2>
						</div>
						<h1>VS</h1>
						<span>截止: 11月9日 08:00</span>
					</li>
					<li class="guess-vsLi">
						<img src="../../../assets/user/image/guess/链接2_08.png" alt="" />
						<span>步行者</span>
					</li>
				</ul>
			</div>
			<div class="guess-detail" v-for="item in boxes">
				<div class="guess-detailTop">
					<img :src="item.src" alt="" />
					<h1>{{ item.title }}</h1>
				</div>
				<div class="guess-detailOther">
					<ul>
						<li class="guess-detailOtherLi">
							<span>{{ item.span1 }}</span>
							<p>{{ item.p1 }}</p>
							<div class="guessLi-div">
								<div :class="item.box_divWidth3"></div>
								<span>{{ item.span3 }}</span>
							</div>
						</li>
						<li class="guess-detailOtherLi">
							<span>{{ item.span2 }}</span>
							<p>{{ item.p2 }}</p>
							<div class="guessLi-div">
								<div :class="item.box_divWidth4"></div>
								<span>{{ item.span4 }}</span>
							</div>
						</li>
					</ul>
					<div class="detail">
						<img :src="item.src1" alt=""  />
						<p>{{ item.p3 }}</p>
						<img :src="item.src2" alt="" />
						<p>{{ item.p4 }}</p>
						<div class="hr" :class="item.box_hr2"></div>
					</div>
				</div>
			</div>
			<div class="guess-hr"></div>
			<div class="guess-vs">
				<ul>
					<li class="guess-vsLi">
						<img src="../../../assets/user/image/guess/链接2_16.png" alt="" />
						<span>活塞</span>
					</li>
					<li class="guess-vsLi1">
						<div class="VS">
							<h2>NBA</h2>
						</div>
						<h1>VS</h1>
						<span>截止: 11月9日 08:00</span>
					</li>
					<li class="guess-vsLi">
						<img src="../../../assets/user/image/guess/链接2_18.png" alt="" />
						<span>步行者</span>
					</li>
				</ul>
			</div>
			<div class="guess-detail">
				<div class="guess-detailTop">
					<img src="../../../assets/user/image/guess/链接2_13.png" alt="" />
					<h1>本场比赛阿龙-戈登的篮板数会不会比克里斯...</h1>
				</div>
				<div class="guess-detailOther">
					<ul>
						<li class="guess-detailOtherLi">
							<span>会</span>
							<p>(1.75)</p>
							<div class="guessLi-div">
								<div style="width: 21px;"></div>
								<span>14.1%</span>
							</div>
						</li>
						<li class="guess-detailOtherLi">
							<span>不会</span>
							<p>1.75</p>
							<div class="guessLi-div">
								<div style="width: 136.5px;"></div>
								<span>85.9%</span>
							</div>
						</li>
					</ul>
					<div class="detail">
						<img src="../../../assets/user/image/guess/person.png" alt=""  />
						<p>385</p>
						<img src="../../../assets/user/image/guess/msg.png" alt="" />
						<p>17</p>
						<div class="hr hr4"></div>
					</div>
				</div>
			</div>
			<div class="guess-footer"></div>
		</div>
	</div>	
</template>

<script>

export default{
	methods:{
			goBack(){
				this.$router.go(-1)
			}
	},
	data(){
		return {
			boxes: [
		        {
		          src: require('../../../assets/user/image/guess/链接2_13.png'),
		          title: '本场比赛维克托-奥拉迪波的得分会不会比比托...',
		          span1: '会',
		          span2: '不会',
		          span3: '23.8%',
		          span4: '76.2%',
		          p1: '(1.75)',
		          p2: '1.75',
		          p3: '890',
		          p4: '9',
		          src1: require('../../../assets/user/image/guess/person.png'),
		          src2: require('../../../assets/user/image/guess/msg.png'),
		          box_hr2: 'hr1',
		          box_divWidth3: 'divWidth1',
		          box_divWidth4: 'divWidth2'
		        },
		        {
		          src: require('../../../assets/user/image/guess/链接2_13.png'),
		          title: '本场比赛活塞比赛能否赢步行者6分或更多?',
		          span1: '会',
		          span2: '不会',
		          span3: '29.8%',
		          span4: '70.2%',
		          p1: '(1.75)',
		          p2: '1.75',
		          p3: '564',
		          p4: '6',
		          src1: require('../../../assets/user/image/guess/person.png'),
		          src2: require('../../../assets/user/image/guess/msg.png'),
		          box_hr2: 'hr2',
		          box_divWidth3: 'divWidth3',
		          box_divWidth4: 'divWidth4'
		        },
		        {
		          src: require('../../../assets/user/image/guess/链接2_13.png'),
		          title: '本场比赛总分能否达到211分或更多?',
		          span1: '能',
		          span2: '不能',
		          span3: '83.9%',
		          span4: '16.1%',
		          p1: '(1.75)',
		          p2: '1.75',
		          p3: '720',
		          p4: '10',
		          src1: require('../../../assets/user/image/guess/person.png'),
		          src2: require('../../../assets/user/image/guess/msg.png'),
		          box_hr2: 'hr3',
		          box_divWidth3: 'divWidth5',
		          box_divWidth4: 'divWidth6'
		        },
		        {
		          src: require('../../../assets/user/image/guess/链接2_13.png'),
		          title: '本场比赛总分能否达到211分或更多?',
		          span1: '能',
		          span2: '不能',
		          span3: '83.9%',
		          span4: '16.1%',
		          p1: '(1.75)',
		          p2: '1.75',
		          p3: '720',
		          p4: '10',
		          src1: require('../../../assets/user/image/guess/person.png'),
		          src2: require('../../../assets/user/image/guess/msg.png'),
		          box_hr2: 'hr3',
		          box_divWidth3: 'divWidth5',
		          box_divWidth4: 'divWidth6'
		        }
		    ]
		}
	}
}
</script>

<style scoped>
*{
	border: 0;
	margin: 0;
	padding: 0;
}
.guess{
	background-color: #FFFFFF;
}
.guess-top{
	width: 375px;
	height: 50px;
	border-bottom: 1px #b2b2b2 solid;
	position: relative;
}
.guess-top img{
	width: 20px;
	height: 23.5px;
	position: absolute;
	top: 15px;
	left: 12.5px;
}
.guess-top span{
	color: #939393;
	font-size: 18px;
	position: absolute;
	top: 17.5px;
	left: 160px;
}
.guess-top small{
	font-size: 15px;
	color: #424242;
	position: absolute;
	top: 21px;
	right: 39.5px;
}
.guess-vs{
	width: 375px;
	height: 101px;
	border-bottom: 1px #b2b2b2 solid;
	position: relative;
}
.guess-vs li{
	list-style-type: none;
	float: left;
	text-align: center;
}
.guess-vsLi img{
	width: 44px;
	height: 44px;
	margin-top: 15px;
	margin-left: 45px;
}
.guess-vsLi span{
	display: block;
	font-size: 15px;
	color: #8f8f8f;
	margin-top: 5px;
	margin-left: 45px;
}
.guess-vsLi1{
	text-align: center;
}
.VS{
	width: 60px;
	height: 20.5px;
	margin-left: 60px;
	border-radius: 0px 0px 10px 10px;
	background-color: #515151;
	line-height: 20.5px;
}
.VS h2{
	font-size: 16px;
	color: #e7e7e7;
}
.guess-vsLi1 h1{
	color: #000000;
	font-size: 16px;
	margin-left: 40px;
	margin-top: 17.5px;
}
.guess-vsLi1 span{
	color: #8f8f8f;
	font-size: 12px;
	margin-left: 35px;
	margin-top: 8.5px;
}
.guess-detailTop img{
	margin-top: 15px;
	margin-left: 15px;
	width: 16px;
	height: 20px;
}
.guess-detailTop h1{
	font-size: 12px;
	width: 85%;
	color: #545454;
	clear: both;
	display: inline-block;
	padding: 20px 0 0 0;
	text-align: left;
}
.guess-detailTop img{
	float: left;
}
.guess-detailOther ul{
	margin-left: 22px;
	margin-top: 27.5px;
}
.guess-detailOtherLi{
	list-style-type: none;
	float: left;
	width: 154px;
	height: 62px;
	border: 3px solid #dfdfdf;
	margin-right: 16.5px;
	text-align: center;
}
.guess-detailOtherLi span{
	display: block;
	margin-top: 8px;
	font-size: 10px;
}
.guess-detailOtherLi p{
	display: block;
	margin-top: 6px;
	color: #8c8c8c;
	font-size: 10px;
}
.guessLi-div{
	width: 154px;
	height:  13.5px;
	border-top: 4px solid #dfdfdf;
	margin-top: 5px;
}
.guessLi-div div{
	height:  11px;
	background-color: #dfdfdf;
}
.guessLi-div span{
	margin-top: -12px;
	font-size: 10px;
}
.detail{
	clear: both;
	padding-top: 11px;
	margin-left: 22px;
}
.detail img{
	width: 18px;
	height: 18px;
	float: left;
	margin-left: 5px;
}
.detail p{
	font-size: 6px;
	color: #8c8c8c;
	float: left;
	margin-top: 3px;
}
.hr{
	clear: both;
	width: 331px;
	padding-top: 11px;
}
.hr1{
	border-bottom: 0.5px solid #dfdfdf;
}
.hr2{
	border-bottom: 2px solid #dfdfdf;
}
.hr3{
	border-bottom: 2px solid #ffffff;
}
.hr4{
	border-bottom: 2px solid #dfdfdf;
}
.divWidth1{
	width: 29.5px;
}
.divWidth2{
	width: 127.5px;
}
.divWidth3{
	width: 40px;
}
.divWidth4{
	width: 109.5px;
}
.divWidth5{
	width: 136px;
}
.divWidth6{
	width: 22px;
}
.guess-hr{
	width: 375px;
	height: 11px;
	background-color: #f7f4f6;
}
.guess-footer{
	width: 375px;
	height: 100px;
	background-color: #ffffff;
}	
</style>