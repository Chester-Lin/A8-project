<template>
	<div>
		<div class="today">今天</div>
		<div>
			<ul>
				<li v-for="(item,index) in bigHot">
					<v-bighot :selections='bigHot[index]'></v-bighot>
				</li>
			</ul>
			<ul>
				<li v-for="(item,index) in twoHot">
					<v-twohot :selections='twoHot[index]'></v-twohot>
				</li>
			</ul>
		</div>
	</div>	
</template>

<script>
import VBighot from '../../components/game/bighot.vue'	
import VTwohot from '../../components/game/twohot.vue'
	export default {
		components:{
			VBighot,
			VTwohot
		},
		data(){
			return {
				bigHot:[
					{
						title:'高尔夫',
						smallpic:require('../../assets/game/hot/热门_03.png'),
						game:'蓝湾LPGA高尔夫大师赛',
						time:'进行中',
						sspic:require('../../assets/game/hot/热门_06.png'),
						live:'直播中',
						peoplepic:require('../../assets/game/small/human.png'),
						people:'1728',
						channel:'CCTV5'
					},
					{
						title:'',
						smallpic:require('../../assets/game/hot/热门_10.png'),
						game:'体育新闻',
						time:'18:00开始',
						sspic:require('../../assets/game/small/voice.png'),
						live:'',
						peoplepic:require('../../assets/game/small/human.png'),
						people:'12222',
						channel:'CCTV5'
					},
					{
						title:'排球',
						smallpic:require('../../assets/game/hot/热门_03.png'),
						game:'冠军欧洲-世预赛前瞻',
						time:'18:35开始',
						sspic:require('../../assets/game/small/voice.png'),
						live:'',
						peoplepic:require('../../assets/game/small/human.png'),
						people:'1837',
						channel:'CCTV5'
					},
					{
						title:'',
						smallpic:require('../../assets/game/hot/热门_03.png'),
						game:'中国男排联赛  上海VS湖北',
						time:'19:30开始',
						sspic:require('../../assets/game/small/voice.png'),
						live:'',
						peoplepic:require('../../assets/game/small/human.png'),
						people:'1783',
						channel:'CCTV5'
					},
					{
						title:'',
						smallpic:require('../../assets/game/hot/热门_03.png'),
						game:'NBA最前线',
						time:'19:30开始',
						sspic:require('../../assets/game/small/voice.png'),
						live:'',
						peoplepic:require('../../assets/game/small/human.png'),
						people:'5361',
						channel:'CCTV5'
					}
				],
				twoHot:[
					{
						title:'CBA',
						smallpic1:require('../../assets/game/hot/热门_18.png'),
						smallpic2:require('../../assets/game/hot/热门_21.png'),
						first:'福建',
						second:'天津',
						time:'19:35开始',
						sspic:require('../../assets/game/small/voice.png'),
						peoplepic:require('../../assets/game/small/human.png'),
						people:'1753',
						channel:'QQ直播'
					},
					{
						title:'足球友谊赛',
						smallpic1:require('../../assets/game/hot/热门_23.png'),
						smallpic2:require('../../assets/game/hot/热门_25.png'),
						first:'福建',
						second:'天津',
						time:'01:00开始',
						sspic:require('../../assets/game/small/voice.png'),
						peoplepic:require('../../assets/game/small/human.png'),
						people:'6221',
						channel:''
					},
					{
						title:'足球友谊赛',
						smallpic1:require('../../assets/game/hot/热门_27.png'),
						smallpic2:require('../../assets/game/hot/热门_29.png'),
						first:'罗马尼亚',
						second:'土耳其',
						time:'02:30开始',
						sspic:require('../../assets/game/small/voice.png'),
						peoplepic:require('../../assets/game/small/human.png'),
						people:'7256',
						channel:''
					}
				]
			}
		}
	}	
</script>

<style scoped>
.today{
	width: 100%;
	height: 28px;
	background:#F2F2F2;
	text-align: center;
	color: #1b201e;
	font-size: 12px;
	line-height:25px;
}
</style>