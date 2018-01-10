<template>
	<div>
		<div class="top">
	    	<ul class="game-flex">
	    		<router-link :to="{path:item.path}" v-for="(item,index) in titles" tag="li" active-class='active' :key='item.name'>{{item.name}}</router-link>
	    		<li id="last"><img src="../../assets/public/集锦_03.png"/></li>
	    	</ul>
	    		<div style="padding-bottom: 2px;border-top: 1px solid #bfbfbf;background: #FFFFFF;"></div>
	 	</div>
	 	<div style="height: 52px;"></div>
	   
	    <div class="container">
	  		<keep-alive>
			 	<router-view></router-view>
			</keep-alive>
	    </div>
	    <div class="footer">
	    	这是底部部分
	    	
	    </div>
	</div>
</template>

<script>
export default{
	data(){
		return {
			titles:[
				{
					name:'热门',
					path:'/home/hot'
				},
				{
					name:"视频",
					path:'/home/video',
				},
				{
					name:"集锦",
					path:'/home/collection',
				},
				{
					name:"专题",
					path:'/home/special',
				},
				{
					name:"竞猜",
					path:'/home/guessing',
				}
			]
		}
	}
}	
</script>

<style scoped>
#last img{
	width: 18px;
	height: 18px;
}
.top{
	height: 47px;
	width: 100%;
	background: #FFFFFF;
	position: fixed;
	top: 0;
	z-index: 10;
}
.game-flex {
  list-style: none; 
  display: flex;
  height: 47px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:center
}
 
.game-flex li { 
  padding: 14px 0px 15px 0px;
  font-size: 18px; 
  margin: 0 12px;
  font-weight: bold;
  color: #898989;
  box-sizing: border-box;
 
}
.game-flex .active{
  border-bottom: 2px solid #181d1b;	
  color:  #181d1b;
}


.container{
	background: white;
}
.footer{
	opacity: 0;
	height: 49px;
}
</style>